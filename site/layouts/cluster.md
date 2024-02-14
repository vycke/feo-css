---
layout: base.njk
title: Cluster
key: layouts
subkey: cluster
---

[_Back to layouts overview_](/layouts)

Groups items in such a way that a 'cluster' is created that automatically
determines how many items can be on a single row (e.g. tag cloud).

{% include "svg/cluster.njk" %}

## Implementation

```
<div class="cluster">
  ...
</div>
```

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
