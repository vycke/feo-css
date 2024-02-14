---
layout: base.njk
title: Tiles
key: layouts
subkey: tiles
---

Also known as a RAM (repeat, auto, minmax) layout. It is a tile system in which the browser determines how many tiles fit in the avaiable space. It rounds down the number of tiles on a single row, and stretches the tiles to fit the space. When the screen shrinks, the amount of tiles on a row decreases automatically.

{% include "svg/tiles.njk" %}

## Implementation

```
<div class="tiles --width-{z}">
  ...
</div>
```

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th></th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the gap between the child elements</td></tr>
      <tr><td><code>--width-{z}</code></td><td>Required</td><td>Sets the min-width for each individual element</td></tr>
    </tbody>
  </table>
</div>

[_Back to layouts overview_](/layouts)
