---
title: Masonry
category: Layout
source: https://github.com/kevtiq/feo-css/blob/main/src/layout/_masonry.scss
---

A simple implementation of the so-called masonry layout.

## Utility classes

As already hinted by the image above, there are several `.sidebar` linked utility classes that can be applied to alter how the layout behaves.

- `.masonry-w-<name>`: set the min-width of a column, based on `$feo-breakpoints`. The default value is `0`.
- `.masonry-c-<name>`: sets the maximum number of columns, options between 1 and 5 available. The default value is `0`.
- `.masonry-g-<name>`: set the gap between items. This gap is applied both horizontally and vertically. Based on `$feo-sizes`.

> If the utility classes are not flexible enough and you want to adjust the way the layout pattern behaves, adjust the `--masonry-width`, `--masonry-columns`, and `--masonry-gap` custom properties on the element you are applying this pattern to.
