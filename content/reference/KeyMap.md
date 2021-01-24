---
layout: main.pug
title: KeyMap
---

# {{title}}

## Static properties

<pre class="language-ts" id="canonize"><code>
static canonize(seq: string): string;
</code></pre>

<pre class="language-ts" id="identify"><code>
static identify(e: KeyboardEvent | React.KeyboardEvent<unknown>): string;
</code></pre>
  
## Properties

<pre class="language-ts" id="bind"><code>
bind(seq: string, cb: (e: KeyboardEvent) => void): void;
</code></pre>

<pre class="language-ts" id="unbind"><code>
unbind(seq: string, cb: (e: KeyboardEvent) => void): void;
</code></pre>

<pre class="language-ts" id="getKeys"><code>
getKeys(): string[];
</code></pre>

<pre class="language-ts" id="getHandlers"><code>
getHandlers(seq: string): ((e: KeyboardEvent) => void)[];
</code></pre>

<pre class="language-ts" id="handle"><code>
handle(e: KeyboardEvent): void;
</code></pre>
