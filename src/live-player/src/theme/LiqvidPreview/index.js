/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";
import {useCallback, useEffect, useRef} from "react";
import styles from "./styles.module.css";

import * as Babel from "@babel/standalone";

import {disableLines, findLines, freezeMark} from "./disableLines";
import {extractCSS, extractHead} from "./extractCSS";
import {Decoration} from "@codemirror/view";

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import BrowserOnly from "@docusaurus/BrowserOnly";
import {CSSEditor} from "./CSSEditor";
import {HTMLEditor} from "./HTMLEditor";
import {TSXEditor} from "./TSXEditor";

const Mod = (!ExecutionEnvironment.canUseDOM || navigator.platform === "MacIntel" ? "Cmd" : "Ctrl");
const liqvidVersion = "2.1.3";

export default function Playground({children, transformCode, ...props}) {
  const tsxView = useRef();
  const cssView = useRef();
  const htmlView = useRef();
  const iframe = useRef();
  const content = useRef();
  if (content.current === undefined) {
    let styles, head, linesToFreeze;
    children = children.trim();
    [children, styles] = extractCSS(children);
    [children, head] = extractHead(children);
    [children, linesToFreeze] = findLines(children);
    content.current = {
      children, styles, head, linesToFreeze
    };
  }

  // optimize css changes
  const lastTSX = useRef();
  const refresh = useCallback(() => {
    if (!tsxView.current)
      return;
    const tsx = tsxView.current.state.doc.toString();
    const css = cssView.current.state.doc.toString();
    const head = htmlView.current?.state.doc.toString();

    if (lastTSX.current === tsx) {
      iframe.current.contentWindow.postMessage({action: "update-css", value: css});
    } else {
      iframe.current.srcdoc = render({
        tsx, css, module: props.module, head
      });
    }
    lastTSX.current = tsx;

    return true;
  }, []);

  useEffect(refresh, []);

  // collapse
  const contentRef = useRef();
  useEffect(() => {
    // need to set height for collapse animation to work
    contentRef.current.style.height = contentRef.current.scrollHeight + "px";
  }, []);
  const toggleCollapse = useCallback(e => {
    const container = e.target.closest(".tabs-container");
    container.classList.toggle("collapsed");
  }, []);

  // tab switching
  const toggleTab = useCallback((e) => {
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
        {content.current.head && <li className={`tabs__item`} role="tab" tabIndex="-1" aria-selected="false" onClick={toggleTab}>&lt;head&gt;</li>}
        <li className={styles.liqvidPreviewRefresh} role="button" title={`${Mod}+Enter`} onClick={refresh}>Refresh</li>
      </ul>
      <div className="margin-vert--md" ref={contentRef}>
        <div role="tabpanel">
          <TSXEditor
            content={content.current.children} linesToFreeze={content.current.linesToFreeze}
            refresh={refresh} view={tsxView} />
        </div>
        <div role="tabpanel" hidden>
          <CSSEditor content={content.current.styles} refresh={refresh} view={cssView} />
        </div>
        {content.current.head && <div role="tabpanel" hidden>
          <HTMLEditor content={content.current.head} refresh={refresh} view={htmlView} />
        </div>}
        <iframe allowFullScreen ref={iframe} />
      </div>
    </div>
  );
}

function render({tsx, css="", module, head = ""}) {
  const opts = {
    filename: "demo.tsx",
    presets: ["react", "typescript"]
  };
  if (!module) {
    opts.plugins = [
      ["transform-modules-umd",
        {
          "globals": {
            "liqvid": "Liqvid",
            "ractive-player": "RactivePlayer",
            "react": "React",
            "react-dom": "ReactDOM"
          }
        }
      ]];
    opts.presets.unshift("env");
  }
  try {
    const js = Babel.transform(tsx, opts).code;

    let doc = String.raw`
 <!DOCTYPE html>
 <html>
 <head>
   <title></title>
 
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
   <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1"/>
 
   <!-- Liqvid -->
   <link href="https://unpkg.com/liqvid@${liqvidVersion}/dist/liqvid.min.css" rel="stylesheet" type="text/css"/>
   <style id="user-styles" type="text/css">${css}</style>
   <script type="text/javascript">
   window.addEventListener("message", msg => {
     if (msg.data.action === "update-css") {
       document.getElementById("user-styles").textContent = msg.data.value;
     }
   });
   </script>
   ${head}
 </head>
 <body>
   <main></main>
    <script src="https://unpkg.com/@liqvid/polyfills/dist/waapi.js"></script>
   `;

    if (module) {
      doc += String.raw`<script type="module">${esmShImports(js)}</script>`;
    } else {
      doc += String.raw`<!-- production -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js"></script>
     
     <script src="https://unpkg.com/liqvid@${liqvidVersion}/dist/liqvid.min.js"></script>
     <script crossorigin integrity="sha384-ImWMbbJ1rSn1mn+2vsKm/wN6Vc7hPNB2VKN0lX3FAzGK+c7M2mD6ZZcwknuKlP7K" src="https://cdn.rangetouch.com/2.0.1/rangetouch.js"></script>
   
     <script>${js}</script>`;
    }

    doc += String.raw`</body>
     </html>`;

    return doc;
  } catch (e) {
    return String.raw`<html><body><pre>${e}</pre></body></html>`;
  }
}

function esmShImports(str) {
  return str.replace(/^(import .+? from\s+)(["'])(.+?)\2(;?)$/gm, (match, start, q, name, end) => {
    // https://github.com/esm-dev/esm.sh/issues/276
    if (name.startsWith("@liqvid")) {
      name += `?deps=liqvid@${liqvidVersion}`;
    }
    return `${start}${q}https://esm.sh/${name}${q}${end}`;
  });
}