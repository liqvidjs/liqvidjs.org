---
layout: main.pug
title: Recording
---

# Recording

need <a href="https://github.com/ysulyma/rp-recording">rp-recording</a>

<p class="todo">warn about mouseUp override</p>

<pre class="language-tsx"><code>
import * as React from "react";

import {Player} from "ractive-player";
import Recording from "rp-recording";

/* ... */

&lt;Player plugins={[Recording]} script={script}&gt;
  {/* ... */}
&lt;/Player&gt;
</code></pre>

<h2>Keyboard commands</h2>

<table>
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">Command</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><kbd>Alt+Cmd+2</kbd></td>
      <td>Start/Stop recording</td>
    </tr>
    <tr>
      <td><kbd>Alt+Cmd+3</kbd></td>
      <td>Pause/Resume recording</td>
    </tr>
    <tr>
      <td><kbd>Alt+Cmd+4</kbd></td>
      <td>Discard recording</td>
    </tr>
  </tbody>
</table>

<p class="todo">indicate warning about durations</p>
