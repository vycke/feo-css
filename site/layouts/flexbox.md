---
layout: base.njk
title: Flex
key: layouts
subkey: flex
---

Implements a flex container that makes use of the common layout APIs defined in Feo.css.

## Implementation

```
<div class="flex">
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
      <tr><td><code>--layout-gap</code></td><td><code>0</code></td><td>Sets the <code>max-width</code> of the targeted element</tr>
      <tr><td><code>--layout-direction</code></td><td><code>row</code></td><td>Sets the <code>flex-direction</code> of the targeted element</tr>
      <tr><td><code>--layout-align</code></td><td><code>center</code></td><td>Sets the <code>align-items</code> of the targeted element</tr>
    </tbody>
  </table>
</div>

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th></th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td>Controls the gap between the child elements. Default is '0'.</td></tr>
      <tr><td><code>--column/--row</code></td><td>Controls the flex-direction. Default is 'row'.</td></tr>
      <tr><td><code>--start/--end/--center/--stretch</code></td><td>Aligns items at the start on the cross-axis. Default is 'center'.</td></tr>
    </tbody>
  </table>
</div>
