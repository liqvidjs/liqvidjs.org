---
title: Packages
---

The core library only aims to provide a framework, much like React itself. Complex effects are provided in separate packages.

## Core packages {#core-packages}
- [liqvid](https://www.npmjs.com/package/liqvid)  
  The core package.

- [@liqvid/recording](../plugins/recording.md)  
  A system for recording audio and author actions.

## Miscellaneous {#misc}

- [@lqv/cursor](../plugins/cursor.md)  
  Record and replay cursor motion.

- [rp-paint](https://www.npmjs.com/package/rp-paint)  
  Record and replay stylus drawing. Warning: this package works well enough for basic writing purposes, but it is very buggy and many of the fancier features (colors, layers) do not work reliably yet.

- [rp-prompt](https://www.npmjs.com/package/rp-prompt)
  Provides prompts to read from when recording.

## Coding {#coding}

- [@lqv/codebooth](../plugins/codebooth.md)  
  A GUI with Code/Playground/Copy/Run/Clear buttons and an Output pane. Based on `@lqv/codemirror`; use that directly if you want more customization.

- [@lqv/codemirror](../plugins/codemirror.md)  
  Record and replay CodeMirror interactions.

## Tutorials / Sample projects {#tutorials--sample-projects}

- [lv-tutorial](https://github.com/ysulyma/lv-tutorial) (watch online [here](/))
- [lv-tutorial-math](https://github.com/ysulyma/lv-tutorial-math) (watch online [here](/math/))
