---
title: Panel
category: Layout
source: https://github.com/crinklesio/feo-css/blob/main/src/layout/_pancake.scss
---

`.panel-<l/r>` allow you to create a responsive two-column layout. One column has a fixed width, while the other column takes all the available space. The `l` or `r` indication determines which column will be fixed, the _left_ or _right_ column, respectively. Whenever the width of the parent container falls below a certain threshold, the layout moves to two rows, instead of two columns.

![](/img/panel.png)

## Utility classes

As already hinted by the image above, there are several `.panel` linked utility classes that can be applied to alter how the layout behaves.

- `.panel-s-<name>`: set the width (or size!) of the controllable panel, based on `$feo-sizes`.
- `.panel-w-<name>`: set the min-width of the wrapper, based on `$feo-sizes`.
- `.panel-g-<name>`: set the gap between the two columns. This gap is applied both horizontally and vertically. Based on the, based on `$feo-spacing`.

> By default the value for `.panel-s-` is `50%`.
