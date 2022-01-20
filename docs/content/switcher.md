---
title: Switcher
category: Layout
source: https://github.com/kevtiq/bace-css/blob/main/src/layout/_switcher_.scss
---

The `.switcher` class allows for a responsive grouping of element to automatically switch from horizontal alignment to vertical alignment, based on the width of the parent container.

![](/img/switcher.png)

## Utility classes

The available utility classes to alter the settings for `.switcher` are listed below.

- `.switcher-w-<name>`: set the `min-width` of an individual item in the tile system, based on `$bace-breakpoints`.
- `.gap-<name>`: set the `gap` property, which defines the gap both vertically and horizontally between items in the tile system. Based on `$bace-sizes`.

> If the utility classes are not flexible enough and you want to adjust the way the layout pattern behaves, adjust the `--switcher-width` custom properties on the element you are applying this pattern to.
