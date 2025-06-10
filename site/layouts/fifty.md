---
layout: base.njk
title: Fifty-fifty
parent: layouts
key: fifty-fifty
---

A simple layout pattern that makes two elements of equal width next to eachother, until a threshold is met. When the available space is lower than the threshold, items are positioned below eachother. Can be used with more than 2 items, but does not act the same as the [switcher](/layouts/switcher), as items just wrap.

## Implementation

```
<div class="fifty --threshold-{z}">
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
      <tr><td><code>--layout-threshold</code></td><td><code>0</code></td><td>Sets the <code>max-width</code> of the child elements</tr>
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
