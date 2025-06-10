---
layout: base.njk
title: Tiles
parent: layouts
key: tiles
---

Also known as a RAM (repeat, auto, minmax) layout. It is a tile system in which the browser determines how many tiles fit in the avaiable space. It rounds down the number of tiles on a single row, and stretches the tiles to fit the space. When the screen shrinks, the amount of tiles on a row decreases automatically.

{% include "svg/tiles.svg" %}

## Implementation

```
<div class="tiles --threshold-{z}">
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
      <tr><td><code>--layout-threshold</code></td><td><code>0</code></td><td>Sets the <code>min-width</code> of the child elements</tr>
      <tr><td><code>--layout-gap</code></td><td><code>0</code></td><td>Sets the <code>gap</code> of the targeted element</tr>
    </tbody>
  </table>
</div>

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th>Required?</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--threshold-{z}</code></td><td>Required</td><td>Controls the <code>--layout-threshold</code> API</tr>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the <code>--layout-gap</code> API</tr>
    </tbody>
  </table>
</div>
