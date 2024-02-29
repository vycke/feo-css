---
layout: base.njk
title: Stack
key: layouts
subkey: stack
---

A simple layout pattern to place items on top eachother, in a depth sense. The lower items in the DOM-tree are positioned more on top.

#### Implementation

```html
<div class="stack">
  <img ... />
  <h2>text</h2>
</div>
```

#### Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--layout-ratio</code></td><td>Sets the <code>aspect-ratio</code> property</td></tr>
    </tbody>
  </table>
</div>

[_Back to layouts overview_](/layouts)
