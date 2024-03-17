---
layout: base.njk
title: Grids
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

## API

<div>
  <table>
    <thead>
      <tr><th>Custom property</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--layout-gap</code></td><td><code>0</code></td><td>Sets the <code>gap</code> of the targeted element</tr>
      <tr><td><code>--layout-amount</code></td><td><code>2</code></td><td>Sets the number of colums</tr>
    </tbody>
  </table>
</div>

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
