import * as React from "react";
import {basicSetup} from "codemirror";
import {indentWithTab} from "@codemirror/commands";
import {html} from "@codemirror/lang-html";
import {EditorState} from "@codemirror/state";
import {EditorView, keymap} from "@codemirror/view";
import {useEffect, useRef} from "react";

export function HTMLEditor(props) {
  const ref = useRef();
  useEffect(() => {
    const view = new EditorView({
      state: EditorState.create({
        doc: props.content,
        extensions: [
          basicSetup,
          keymap.of([indentWithTab]),
          // refresh iframe
          keymap.of([{
            key: "Mod-Enter",
            run: props.refresh
          }]),
          html()
        ]
      })
    });

    ref.current.replaceWith(view.dom);
    props.view.current = view;
  }, []);
  return <div ref={ref} />;
}
