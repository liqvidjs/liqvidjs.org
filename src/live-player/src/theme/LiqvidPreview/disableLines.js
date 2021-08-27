import {keymap, Decoration, DecorationSet, EditorView, ViewPlugin} from "@codemirror/view";

/** Find lines to freeze */
export function findLines(code) {
  const lines = code.split("\n");
  const freeze = [];
  for (let i = 0; i < lines.length; ++i) {
    if (lines[i].match(/^\s*\/\/\s*freeze-next-line\s*$/)) {
      lines.splice(i, 1);
      freeze.push(i+1);
      --i;
    } else if (lines[i].match(/^\s*\/\/\s*freeze-start\s*$/)) {
      lines.splice(i, 1);
      for (; i < lines.length; ++i) {
        if (lines[i].match(/^\s*\/\/\s*freeze-end\s*$/)) {
          lines.splice(i, 1);
          i--;
          break;
        }
        freeze.push(i+1);
      }
    }
  }
  return [lines.join("\n"), freeze];
}

const keys = ["Backspace", "Delete", "Enter", "Tab", "Mod-/"];

export function disableLines(...lines) {
  lines.sort((a, b) => a-b);

  const preventDelete = (view) => {
    const {doc} = view.state;
    const range = view.state.selection.ranges[0];
    const start = doc.lineAt(range.from).number;
    const end = doc.lineAt(range.to).number;
    
    for (let i = start; i <= end; ++i) {
      const dom = view.domAtPos(doc.line(i).from);
      if (dom.node.nodeType === dom.node.ELEMENT_NODE && dom.node.classList.contains("cm-disabled")) {
        return true;
      }
    }
    return false;
  };

  return [
    keymap.of(keys.map(key => ({key, run: preventDelete}))),
    freezeTheme,
    EditorView.domEventHandlers({
      keydown: (e, view) => {
        // don't prevent copy
        if (e.key === "c" && (e.getModifierState("Control") || e.getModifierState("Meta"))) {
          return;
        }

        if (preventDelete(view)) {
          e.preventDefault();
          return false;
        }
      }
    }),
    ViewPlugin.fromClass(class {
      constructor(view) {
        this.view = view;
        this.setDecorations();
      }

      setDecorations() {
        this.decorations = Decoration.set(
        lines.map(n => {
          const {from} = this.view.state.doc.line(n);
          return freezeMark.range(from, from);
          })
        );
      }

      update(desc, tr) {
        const {doc} = desc.startState;
        for (const r of desc.changedRanges) {
          const fromA = desc.startState.doc.lineAt(r.fromA).number;
          const toA = desc.startState.doc.lineAt(r.toA).number;
          const fromB = desc.state.doc.lineAt(r.fromB).number;
          const toB = desc.state.doc.lineAt(r.toB).number;
          for (let i = 0; i < lines.length; ++i) {
            if (lines[i] > fromB)
              lines[i] += (fromA - toA) - (fromB - toB);
          }
          this.setDecorations();
        }
      }
    }, {
      decorations: v => v.decorations,
      eventHandlers: {
        keymap
      }
    })
  ];
}

const freezeMark = Decoration.line({attributes: {class: "cm-disabled", contentEditable: false}})

const freezeTheme = EditorView.baseTheme({
  ".cm-disabled": {opacity: "0.5", pointerEvents: "none" }
});
