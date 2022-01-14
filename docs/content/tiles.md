---
title: Tiles
category: Layout
source: https://github.com/kevtiq/bace-css/blob/main/src/layout/_tiles.scss
---

The `.tiles` class allows for a responsive [tile system](https://crinkles.io/writing/css-layout-patterns#responsive-multi-column-grid-system). Based on the settings, the layout determines itself how many tiles fit horizontally, and scales the tiles in the available space.

![](/img/tiles.png)

## Utility classes

The available utility classes to alter the settings for `.tiles` are listed below.

- `.tiles-g-<name>`: set the `gap` property, which defines the gap both vertically and horizontally between items in the tile system. Based on `$bace-sizes`.
- `.tiles-w-<name>`: set the `min-width` of an individual item in the tile system, based on `$bace-breakpoints`.

> If the utility classes are not flexible enough and you want to adjust the way the layout pattern behaves, adjust the `--tiles-gap`, and/or `--tiles-width` custom properties on the element you are applying this pattern to.
