---
title: Cluster
category: Layout
source: https://github.com/crinklesio/feo-css/blob/main/src/layout/_cluster.scss
---

The `.cluster` class allows for a responsive cluster system of separate elements. It is closely related to the [flow pattern](/flow). However, the difference here is that `.cluster` assumes the child elements will span multiple rows.

![](/img/cluster-1.png)

The `.cluster-stretch` combines the `.cluster` with the ideas of `.tiles`. Based on the settings, the layout determines itself how many elements fit horizontally. The remaining available horizontal space is equally distributed among all elements on a row, even when there is only one element on a row (e.g. bottom row). All elements should be the same size, except for the bottom row.

![](/img/cluster-2.png)

## Utility classes

The available utility classes to alter the settings for `.tiles` are listed below.

- `.cluster-g-<name>`: set the `gap` property, which defines the gap both vertically and horizontally between items in the cluster system. Based on `$feo-sizes`.
- `.cluster-w-<name>`: set the `min-width` of an individual item in the cluster system, based on `$feo-breakpoints`.

> If the utility classes are not flexible enough and you want to adjust the way the layout pattern behaves, adjust the `--cluster-gap`, and/or `--cluster-width` custom properties on the element you are applying this pattern to.
