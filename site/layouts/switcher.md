---
layout: base.njk
title: Switcher
key: layouts
subkey: switcher
---

A _responsive_ layout pattern that helps switching the orientation from horizontal to vertical if the _available width for the targeted (wrapper) element_ becomes less than the set width. Useful when the targeted element has >= 2 child elements.

{% include "svg/switcher.svg" %}

## Implementation

```
<div class="switcher --threshold-{z}">
  ...
</div>
```

<details>
  <summary>Implementation tip!</summary>
  When you apply the <code>switcher</code> pattern to the "fixed" content of <code>sidebar</code> pattern, you can get an impressive layout. On larger available width, the content in the "fixed" sidebar has a vertical orientation. Once the available width decreases, the sidebar transforms into a vertical alignment. But the switcher does the opposite, as it now has more available width. To achieve this, ensure the <code>--threshold-{z}</code> class utility of the switcher has a <code>z+1</code> compared to the sidebar.</p>
</details>

## API

<div>
  <table>
    <thead>
      <tr><th>Custom property</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--layout-threshold</code></td><td><code>0</code></td><td>Sets the threshold when the targeted element switches orientation</tr>
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
      <tr><td><code>--threshold-{z}</code></td><td>Required</td><td>Controls the <code>--layout-threshold</code> API</tr>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the <code>--layout-threshold</code> API</tr>
      <tr><td><code>--column/--row</code></td><td></td><td>Controls the <code>--layout-direction</code> API</tr>
    </tbody>
  </table>
</div>
