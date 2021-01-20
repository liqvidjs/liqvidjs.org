---
layout: main.pug
title: Utils
---

# {{title}}

<p>You will probably only need animation, authoring, interactivity, misc, mobile.</p>

<h2 id="animation">Utils.animation</h2>

<pre class="language-typescript" id="animation.animate"><code>
animate(options: {
  startValue?: number,
  endValue?: number,
  startTime: number,
  duration: number,
  easing?: (x: number) =&gt; number
}): (t: number) =&gt; number;
</code></pre>

<pre class="language-typescript" id="animation.replay"><code>
replay&lt;K&gt;({data, start, end, active, inactive, compressed}: ReplayArgs&lt;K&gt;): (t: number) =&gt; void;
</code></pre>

<h2 id="authoring">Utils.authoring</h2>

<pre class="language-typescript" id="authoring.during"><code>
/** Returns a CSS block to show the element only when marker name begins with `prefix` */
during: (prefix: string) =&gt; {"data-during": string;};
</code></pre>

<pre class="language-typescript" id="authoring.from"><code>
/** Returns a CSS block to show the element when marker is in [first, last) */
from: (first: string, last?: string) =&gt; {"data-from-first": string; "data-from-last"?: string;};
</code></pre>

<pre class="language-typescript" id="authoring.showIf"><code>
showIf(cond: boolean): {style?: React.CSSProperties;};
</code></pre>

<h2>Utils.interactivity</h2>

<pre class="language-typescript" id="interactivity.dragHelper"><code>
dragHelper&lt;T extends Node, E extends MouseEvent | React.MouseEvent&lt;T&gt; | TouchEvent | React.TouchEvent&lt;T&gt;&gt;(
  move: (e: MouseEvent | TouchEvent, o: {x: number; y: number; dx: number; dy: number}) =&gt; void,
  down?: (
    e: E,
    o: {x: number; y: number},
    upHandler: (e: MouseEvent | TouchEvent) =&gt; void,
    moveHandler: (e: MouseEvent | TouchEvent) =&gt; void
  ) =&gt; void,
  up?: (e: MouseEvent | TouchEvent) =&gt; void
): (e: E) =&gt; void;
</code></pre>

<pre class="language-typescript" id="interactivity.dragHelperReact"><code>
dragHelperReact&lt;T extends Node&gt;(
  move: (e: MouseEvent | TouchEvent, o: {x: number; y: number; dx: number; dy: number}) =&gt; void,
  down?: (
    e: React.MouseEvent&lt;T&gt; | React.TouchEvent&lt;T&gt;,
    o: {x: number; y: number},
    upHandler: (e: MouseEvent | TouchEvent) =&gt; void,
    moveHandler: (e: MouseEvent | TouchEvent) =&gt; void
  ) =&gt; void,
  up?: (e: MouseEvent | TouchEvent) =&gt; void,
  innerRef?: React.Ref&lt;T&gt;
): {
  onMouseDown: (e: React.MouseEvent&lt;T&gt;) =&gt; void;
  onMouseUp: (e: React.MouseEvent&lt;T&gt;) =&gt; void;
  ref: (_: T) =&gt; void;
};
</code></pre>

<h2 id="media">Utils.media</h2>

<pre class="language-typescript" id="media.awaitMediaCanPlay"><code>
awaitMediaCanPlay(media: HTMLMediaElement): Promise&lt;Event&gt;;
</code></pre>

<pre class="language-typescript" id="media.awaitMediaCanPlayThrough"><code>
awaitMediaCanPlayThrough(media: HTMLMediaElement): Promise&lt;Event&gt;;
</code></pre>

<h2 id="misc">Utils.misc</h2>

<pre class="language-typescript" id="misc.between"><code>
/** Equivalent to `(min <= val) && (val < max)`. */
between(min: number, val: number, max: number): boolean;
</code></pre>

<pre class="language-typescript" id="misc.bind"><code>
/** Bind methods on o. */
bind&lt;T extends {[P in K]: Function}, K extends keyof T&gt;(o: T, methods: K[]): void;
</code></pre>

<pre class="language-typescript" id="misc.constrain"><code>
/** Equivalent to `Math.min(max, Math.max(min, val))` */
constrain: (min: number, val: number, max: number) =&gt; number;    
</code></pre>

<pre class="language-typescript" id="misc.range"><code>
/** Returns [0, ..., n-1] */
range: (n: number) =&gt; number[];
</code></pre>

<pre class="language-typescript" id="misc.wait"><code>
/** Returns a Promise that resolves in `time` milliseconds. */
wait(time: number): Promise&lt;void&gt;;
</code></pre>

<pre class="language-typescript" id="misc.waitFor"><code>
/** Returns a Promise that resolves once `callback` returns true. */
waitFor(callback: () =&gt; boolean, interval?: number): Promise&lt;void&gt;;
</code></pre>

<h2 id="mobile">Utils.mobile</h2>

<pre class="language-typescript" id="mobile.anyHover"><code>
/** Whether any available input mechanism can hover over elements. This is used as a standin for desktop/mobile. */
anyHover: boolean;
</code></pre>

<pre class="language-typescript" id="mobile.onClick"><code>
/** Drop-in replacement for onClick handlers which works better on mobile. */
onClick: &lt;T extends Node&gt;(
  callback: (e: React.MouseEvent&lt;T, MouseEvent&gt; | React.TouchEvent&lt;T&gt;) =&gt; void,
  innerRef?: React.Ref&lt;T&gt;
) =&gt; {
  onClick: (e: React.MouseEvent&lt;T, MouseEvent&gt; | React.TouchEvent&lt;T&gt;) =&gt; void;
} | {
  ref: (_: T) =&gt; void;
};
</code></pre>

<pre class="language-typescript" id="mobile.attachClickHandler"><code>
/**
  Replacement for addEventListener("click") which works better on mobile.
  Returns a function to remove the event listener.
*/
attachClickHandler(node: Node, callback: (e: MouseEvent| TouchEvent) =&gt; void): () =&gt; void;
</code></pre>

<h2 id="react">Utils.react</h2>

<pre class="language-typescript" id="react.useForceUpdate"><code>
useForceUpdate(): React.DispatchWithoutAction;
</code></pre>
A forceUpdate() function.

<pre class="language-typescript" id="react.recursiveMap"><code>
recursiveMap
  (children: React.ReactNode, fn: (child: React.ReactElement&lt;any&gt;) =&gt; React.ReactElement&lt;any&gt;)
  : React.ReactChild[];
</code></pre>

Don't use this.

<h2 id="replayData">Utils.replayData</h2>

<pre class="language-typescript" id="replayData.concat"><code>
concat&lt;T&gt;(...args: [ReplayData&lt;T&gt;, number][]): ReplayData&lt;T&gt;;
</code></pre>

<pre class="language-typescript" id="replayData.length"><code>
  length&lt;T&gt;(data: ReplayData&lt;T&gt;): number;
</code></pre>

<h2 id="time">Utils.time</h2>

<pre class="language-typescript" id="time.timeRegexp"><code>
timeRegexp: RegExp;
</code></pre>

<pre class="language-typescript" id="time.parseTime"><code>
parseTime(str: string): number;
</code></pre>

<pre class="language-typescript" id="time.formatTime"><code>
formatTime(time: number): string;
</code></pre>

<pre class="language-typescript" id="time.formatTimeMs"><code>
formatTimeMs(time: number): string;    
</code></pre>
