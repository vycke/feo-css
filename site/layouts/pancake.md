---
layout: base.njk
title: Pancake
key: layouts
subkey: pancake
---

A common vertical pattern where the center content should stretch the available space, pushing the top and bottom to, well, the top and bottom.

{% include "svg/pancake.svg" %}

## Implementation

```
<div class="pancake">
  ...
</div>
```

## API

<div>
  <table>
    <thead>
      <tr><th>Custom property</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--layout-gap</code></td><td><code>0</code></td><td>Sets the <code>gap</code> of the targeted element</tr>
    </tbody>
  </table>
</div>## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td>Controls the gap between the child elements</td></tr>
    </tbody>
  </table>
</div>
