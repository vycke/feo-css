---
layout: base.njk
title: Equal column grid
key: layouts
subkey: grids
---

A layout pattern to easily create a grid of equal columns.

## Implementation

```
<div class="grid">
  ...
</div>
```

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td>0</td><td>Controls the gap between the child elements</td></tr>
      <tr><td><code>--amount-{z}</code></td><td>2</td><td>Sets the amount of columns for the grid. Maximum available is 12.</td></tr>
    </tbody>
  </table>
</div>

[_Back to layouts overview_](/layouts)
