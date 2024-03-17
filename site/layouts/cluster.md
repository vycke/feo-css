---
layout: base.njk
title: Cluster
key: layouts
subkey: cluster
---

Groups items in such a way that a 'cluster' is created that automatically
determines how many items can be on a single row (e.g. tag cloud).

{% include "svg/cluster.svg" %}

## Implementation

```
<div class="cluster">
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
    </tbody>
  </table>
</div>

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td>Controls the gap between the child elements</td></tr>
    </tbody>
  </table>
</div>
