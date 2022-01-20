---
title: Cluster
category: Layout
source: https://github.com/kevtiq/bace-css/blob/main/src/layout/_cluster.scss
---

The `.cluster` class allows for a responsive cluster system of separate elements.

![](/img/cluster-1.png)

## Utility classes

The available utility classes to alter the settings for `.cluster` are listed below.

- `.gap-<name>`: set the `gap` property, which defines the gap both vertically and horizontally between items in the cluster system. Based on `$bace-sizes`.

> If the utility classes are not flexible enough and you want to adjust the way the layout pattern behaves, adjust the `--cluster-width` custom properties on the element you are applying this pattern to.
