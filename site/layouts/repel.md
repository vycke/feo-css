---
layout: base.njk
title: Repel
key: layouts
subkey: repel
---

A simple layout pattern that pushes elements away from eachother, given the available space. Effectively implementing the `.justify-between`, `.--gap-{z}`, `.flex`, and `.--row` (as the default is horizontal orientation) classes.

{% include "svg/repel.svg" %}

## Implementation

```
<div class="repel">
  ...
</div>
```

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td>Controls the gap between the child elements</td></tr>
      <tr><td><code>--column/--row</code></td><td>Sets the direction, default is row</td></tr>
    </tbody>
  </table>
</div>
