/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";
import styles from "./styles.module.css";

import {basicSetup} from "@codemirror/basic-setup";
import {defaultTabBinding} from "@codemirror/commands";
import {css} from "@codemirror/lang-css";
import {javascript} from "@codemirror/lang-javascript";
import {keymap, EditorView} from "@codemirror/view";
import {EditorState} from "@codemirror/state";
import * as Babel from "@babel/standalone";

import {disableLines, findLines, freezeMark} from "./disableLines";
import {extractCSS} from "./extractCSS";
import {Decoration} from "@codemirror/view";

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import BrowserOnly from "@docusaurus/BrowserOnly";

const Mod = (!ExecutionEnvironment.canUseDOM || navigator.platform === "MacIntel" ? "Cmd" : "Ctrl");

export default function Playground({children, transformCode, ...props}) {
  const tsxView = React.useRef();
  const cssView = React.useRef();
  const iframe = React.useRef();
  const content = React.useRef();
  if (content.current === undefined) {
    let styles, linesToFreeze;
    children = children.trim();
    [children, styles] = extractCSS(children);
    [children, linesToFreeze] = findLines(children);
    content.current = {
      children, styles, linesToFreeze
    };
  }

  // optimize css changes
  const lastTSX = React.useRef();
  const refresh = React.useCallback(() => {
    const tsx = tsxView.current.state.doc.toString();
    const css = cssView.current.state.doc.toString();

    if (lastTSX.current === tsx) {
      iframe.current.contentWindow.postMessage({action: "update-css", value: css});
    } else {
      iframe.current.srcdoc = render(tsx, css);
    }
    lastTSX.current = tsx;
  }, []);

  React.useEffect(refresh, []);

  // collapse
  const contentRef = React.useRef();
  React.useEffect(() => {
    // need to set height for collapse animation to work
    contentRef.current.style.height = contentRef.current.scrollHeight + "px";
  }, []);
  const toggleCollapse = React.useCallback(e => {
    const container = e.target.closest(".tabs-container");
    container.classList.toggle("collapsed");
  }, []);

  // tab switching
  const toggleTab = React.useCallback((e) => {
    const tabs = Array.from(e.target.parentNode.querySelectorAll(".tabs__item"));

    // set tabs
    for (const tab of tabs) {
      if (tab === e.target) {
        tab.classList.add("tabs__item--active");
        tab.setAttribute("aria-selected", "true");
      } else {
        tab.classList.remove("tabs__item--active");
        tab.setAttribute("aria-selected", "false");
      }
    }

    // set panels
    const panels = Array.from(e.target.parentNode.parentNode.querySelectorAll("*[role=tabpanel]"));
    const index = tabs.indexOf(e.target);
    for (let i = 0; i < panels.length; ++i) {
      if (i === index) {
        panels[i].removeAttribute("hidden");
      } else {
        panels[i].setAttribute("hidden", "hidden");
      }
    }
  }, []);

  return (
    <div className={`tabs-container ${styles.liqvidPreview}`}>
      <ul className={`tabs`} role="tablist" aria-orientation="horizontal">
        <li className={styles.liqvidPreviewCollapse} role="button" onClick={toggleCollapse}></li>
        <li className={`tabs__item tabs__item--active`} role="tab" tabIndex="0" aria-selected="true" onClick={toggleTab}>TSX</li>
        <li className={`tabs__item`} role="tab" tabIndex="-1" aria-selected="false" onClick={toggleTab}>CSS</li>
        <li className={styles.liqvidPreviewRefresh} role="button" title={`${Mod}+Enter`} onClick={refresh}>Refresh</li>
      </ul>
      <div className="margin-vert--md" ref={contentRef}>
        <div role="tabpanel">
          <TSXEditor
            content={content.current.children} linesToFreeze={content.current.linesToFreeze}
            refresh={refresh} view={tsxView}/>
        </div>
        <div role="tabpanel" hidden>
          <CSSEditor content={content.current.styles} refresh={refresh} view={cssView}/>
        </div>
        <iframe ref={iframe}/>
      </div>
    </div>
  );
}

function TSXEditor(props) {
  const ref = React.useRef();
  React.useEffect(() => {
    const view = new EditorView({
      state: EditorState.create({
        doc: props.content,
        extensions: [
          disableLines(...props.linesToFreeze),
          basicSetup,
          keymap.of([defaultTabBinding]),
          // refresh iframe
          keymap.of([{
            key: "Mod-Enter",
            run: props.refresh
          }]),
          javascript({jsx: true, typescript: true})
        ]
      })
    });

    ref.current.replaceWith(view.dom);
    props.view.current = view;
  }, []);
  return <div ref={ref}/>;
}

function CSSEditor(props) {
  const ref = React.useRef();
  React.useEffect(() => {
    const view = new EditorView({
      state: EditorState.create({
        doc: props.content,
        extensions: [
          basicSetup,
          keymap.of([defaultTabBinding]),
          // refresh iframe
          keymap.of([{
            key: "Mod-Enter",
            run: props.refresh
          }]),
          css()
        ]
      })
    });

    ref.current.replaceWith(view.dom);
    props.view.current = view;
  }, []);
  return <div ref={ref}/>;
}

function render(tsx, css) {
  const js = Babel.transform(tsx, {
    filename: "demo.tsx",
    plugins: [
      ["transform-modules-umd",
      {"globals": {
        "liqvid": "Liqvid",
        "ractive-player": "RactivePlayer",
        "react": "React",
        "react-dom": "ReactDOM"
      }}
    ]],
    presets: ["env", "react", "typescript"]
  }).code;

  return String.raw`
<!DOCTYPE html>
<html>
<head>
  <title></title>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1"/>

  <!-- ractive-player -->
  <link href="https://unpkg.com/liqvid/dist/liqvid.min.css" rel="stylesheet" type="text/css"/>
  <style type="text/css">
  .rp-canvas {
    background: #FFF;
  }
  </style>
  <style id="user-styles" type="text/css">${css}</style>
  <script type="text/javascript">
  window.addEventListener("message", msg => {
    if (msg.data.action === "update-css") {
      document.getElementById("user-styles").textContent = msg.data.value;
    }
  });
  </script>
</head>
<body>
  <main></main>
  <!-- production -->
  <script crossorigin integrity="sha384-YF0qbrX3+TW1Oyow2MYZpkEMq34QcYzbTJbSb9K0sdeykm4i4kTCSrsYeH8HX11w" src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js"></script>
  <script crossorigin integrity="sha384-DHlzXk2aXirrhqAkoaI5lzdgwWB07jUHz7DJGmS4Vlvt5U/ztRy+Yr8oSgQw5QaE" src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js"></script>

  <script src="https://unpkg.com/liqvid/dist/liqvid.min.js"></script>
  <script crossorigin integrity="sha384-ImWMbbJ1rSn1mn+2vsKm/wN6Vc7hPNB2VKN0lX3FAzGK+c7M2mD6ZZcwknuKlP7K" src="https://cdn.rangetouch.com/2.0.1/rangetouch.js"></script>

  <script>${js}</script>
</body>
</html>`;
}

