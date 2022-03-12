import {basicSetup} from "@codemirror/basic-setup";
import {indentWithTab} from "@codemirror/commands";
import {javascript} from "@codemirror/lang-javascript";
import {EditorState} from "@codemirror/state";
import {EditorView, keymap} from "@codemirror/view";
import * as React from "react";
import {useEffect, useRef} from "react";
import {disableLines} from "./disableLines";

export function TSXEditor(props) {
  const ref = useRef();
  useEffect(() => {
    const view = new EditorView({
      state: EditorState.create({
        doc: props.content,
        extensions: [
          disableLines(...props.linesToFreeze),
          basicSetup,
          keymap.of([indentWithTab]),
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
  return <div ref={ref} />;
}