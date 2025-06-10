---
layout: base.njk
title: Center
parent: layouts
key: center
---

Places the targeted element in the horizontal center. It takes the entire available horizontal space, until it hits its set `max-width` set through the `--threshold-{z}` class utilities.

{% include "svg/center.svg" %}

## Implementation

```
<div class="center --threshold-{z}">
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
      <tr><td><code>--layout-threshold</code></td><td><code>100%</code></td><td>Sets the <code>max-width</code> of the targeted element</tr>
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
    </tbody>
  </table>
</div>
