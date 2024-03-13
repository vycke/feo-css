---
layout: base.njk
title: Center
key: layouts
subkey: center
---

Places the targeted element in the horizontal center. It takes the entire available horizontal space, until it hits its set `max-width` set through the `--threshold-{z}` class utilities.

{% include "svg/center.svg" %}

## Implementation

```
<div class="center --threshold-{z}">
  ...
</div>
```

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th>Custom property</th><th></th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--threshold-{z}</code></td><td><code>--layout-threshold</code></td><td>Required</td><td>Controls the <code>max-width</code> of the targeted element</tr>
      <tr><td><code>--gap-{z}</code></td><td><code>--layout-gap</code></td><td></td><td>Some elements can push out the width, as they should have side-scrolling. The <code>center</code> has a build in mechanism to deal with this. This class utility should be used if one of the parent has a padding that should be taken into account with the max-width.</tr>
    </tbody>
  </table>
</div>
