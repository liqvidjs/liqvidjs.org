---
layout: main.pug
title: Authoring
---

# Authoring

## Forms
In order for a component to receive keyboard input, you need to disable the keyboard controls. There is also a strange bug in iOS Safari where input components need to be manually focused.

<pre class="language-tsx"><code>
import {useCallback, useState} from "react";
import {Utils, usePlayer} from "ractive-player";
const {onClick} = Utils.mobile;

function Form() {
  const player = usePlayer();
  const [value, setValue] = useState("Alice");
  const handler = useCallback((e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; setValue(e.target.value), []);

  return (
    &lt;form&gt;
      &lt;input
        {...onClick((e: React.SyntheticEvent&lt;HTMLInputElement&gt;) =&gt; e.currentTarget.focus())}
        onBlur={player.resumeKeyCapture} onFocus={player.suspendKeyCapture}
        onChange={handler} value={value}/&gt;
    &lt;/form&gt;
  );
}
</code></pre>

## Mobile

### Fat fingers

Controls need a larger clickable area on mobile. You can use the following to increase the clickable area of an HTML component:

<pre class="language-css"><code>
.fat-fingers {
  position: relative;
}
    
.fat-fingers::after {
  content: "";
  position: absolute;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
}
</code></pre>

We learned this trick from <a href="https://front-back.com/expand-clickable-areas-for-a-better-touch-experience/">https://front-back.com/expand-clickable-areas-for-a-better-touch-experience/</a>.

For SVG components, such as a <code class="language-tsx">&lt;circle/&gt;</code>, you can use a duplicate element which is a bit larger and has <code class="language-css">fill: transparent</code>.

### Click events

Click events do not work reliably on mobile devices; one should use touch events instead. We provide an <a href="/reference/Utils#mobile.onClick">onClick</a> helper for this.

### Scroll events

<p>On mobile, <code>Player</code> intercepts <code>touchmove</code> events to prevent scrolling of the window. This can cause problems with scrolling in elements with <code class="language-css">overflow: auto</code> and variants. To ensure an element can be scrolled, write</p>

<pre><code class="language-tsx">
&lt;div onTouchMove={Player.allowScroll}&gt;
</code></pre>
