---
layout: base.njk
title: Pile
key: layouts
subkey: pile
---

A simple layout pattern to place items on top eachother, in a depth sense. The lower items in the DOM-tree are positioned more on top.

## Implementation

```html
<div class="pile">
  <img ... />
  <h2>text</h2>
</div>
```

## API

<div>
  <table>
    <thead>
      <tr><th>Custom property</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--layout-ratio</code></td><td></td><td>Sets the <code>aspect-ratio</code> of the targeted element</tr>
    </tbody>
  </table>
</div>
