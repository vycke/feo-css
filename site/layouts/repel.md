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

## API

<div>
  <table>
    <thead>
      <tr><th>Custom property</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--layout-gap</code></td><td><code>0</code></td><td>Sets the <code>gap</code> of the targeted element</tr>
      <tr><td><code>--layout-direction</code></td><td><code>row</code></td><td>Sets the <code>flex-direction</code> of the targeted element</tr>
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
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the <code>--layout-gap</code> API</tr>
      <tr><td><code>--column/--row</code></td><td></td><td>Controls the <code>--layout-direction</code> API</tr>
    </tbody>
  </table>
</div>
