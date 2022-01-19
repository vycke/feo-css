---
title: Panel
category: Layout
source: https://github.com/kevtiq/bace-css/blob/main/src/layout/_panel.scss
---

`.panel-<l/r>` allow you to create a responsive two-column layout. One column has a fixed width, while the other column takes all the available space. The `l` or `r` indication determines which column will be fixed, the _left_ or _right_ column, respectively. Whenever the width of the parent container falls below a certain threshold, the layout moves to two rows, instead of two columns.

![](/img/panel.png)

## Utility classes

As already hinted by the image above, there are several `.panel` linked utility classes that can be applied to alter how the layout behaves.

- `.panel-f-<name>`: set the width (or size!) of the controllable panel, based on `$bace-breakpoints`. The default value is `50%`.
- `.panel-w-<name>`: set the min-width of the wrapper, based on `$bace-breakpoints`.
- `.panel-g-<name>`: set the gap between the two columns. This gap is applied both horizontally and vertically. Based on the, based on `$bace-sizes`.

> If the utility classes are not flexible enough and you want to adjust the way the layout pattern behaves, adjust the `--panel-gap`, `--panel-fixed`, and/or `--panel-width` custom properties on the element you are applying this pattern to.
