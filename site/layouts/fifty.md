---
layout: base.njk
title: Fifty-fifty
key: layouts
subkey: fifty-fifty
---

A simple layout pattern that makes two elements of equal width next to eachother, until a threshold is met. When the available space is lower than the threshold, items are positioned below eachother. Can be used with more than 2 items, but does not act the same as the [switcher](/layouts/switcher), as items just wrap.

## Implementation

```
<div class="fifty --threshold-{z}">
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
      <tr><td><code>--threshold-{z}</code></td><td>Required</td><td>Sets the breakpoint on child-level, that starts wrapping individual items to a new row.</td></tr>
    </tbody>
  </table>
</div>
