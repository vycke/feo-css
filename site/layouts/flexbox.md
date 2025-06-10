---
layout: base.njk
title: Flex
parent: layouts
key: flex
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
      <tr><th>Class name</th><th>Required?</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the <code>--layout-gap</code> API</tr>
      <tr><td><code>--column/--row</code></td><td></td><td>Controls the <code>--layout-direction</code> API</tr>
      <tr><td><code>--start/--end/--center/--stretch</code></td><td></td><td>Controls the <code>--layout-align</code> API</tr>
      <tr><td><code>--grow</code></td><td></td><td>sets <code>flex-grow: 1;</code> on the targeted element.</tr>
      <tr><td><code>--self-start/end/stretch/center</code></td><td></td><td>sets the <code>align-self</code> property on the targeted element.</tr>
    </tbody>
  </table>
</div>
