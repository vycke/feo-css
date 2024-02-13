---
layout: base.njk
title: Center
key: layouts
subkey: center
---

[_Back to layouts overview_](/layouts)

Places the targeted element in the horizontal center. It takes the entire available horizontal space, until it hits its set `max-width` set through the `--width-{z}` class utilities.

{% include "svg/center.njk" %}

## Implementation

```
<div class="center --width-{z}">
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
      <tr><td><code>--width-{z}</code></td><td><code>--layout-width</code></td><td>Required</td><td>Controls the <code>max-width</code> of the targeted element</tr>
    </tbody>
  </table>
</div>
