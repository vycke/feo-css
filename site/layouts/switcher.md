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
  <summary>Implementation tip(s)!</summary>
  <p><b>1.</b> Combine it with the <code>justify-stretch</code> flexbox utility class, to ensure all items are of the same size, horizontally.</p>
  <p><b>2.</b> When you apply the <code>switcher</code> pattern to the "fixed" content of <code>sidebar</code> pattern, you can get an impressive layout. On larger available width, the content in the "fixed" sidebar has a vertical orientation. Once the available width decreases, the sidebar transforms into a vertical alignment. But the switcher does the opposite, as it now has more available width. To achieve this, ensure the <code>--threshold-{z}</code> class utility of the switcher has a <code>z+1</code> compared to the sidebar.</p>
</details>

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th></th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the gap between the child elements</td></tr>
      <tr><td><code>--threshold-{z}</code></td><td>Required</td><td>Sets the breakpoint for the parent when it switches from horizontal to vertical orientation</td></tr>
       <tr><td><code>--column/--row</code></td><td></td><td>Sets the direction. Default is row.</td></tr>
    </tbody>
  </table>
</div>
