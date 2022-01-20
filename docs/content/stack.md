---
title: Stack
category: Layout
source: https://github.com/kevtiq/bace-css/blob/main/src/layout/_stack.scss
---

The `.stack` applies vertical rhythm for elements. Based on the [Owl selector](https://crinkles.io/writing/an-ode-to-the-css-owl-selector), spacing between the elements is arranged.

![](/img/stack.png)

## Utility classes

The way `.stack` behaves can be controlled with several utility classes.

- `.stack-g-<name>`: set the gap between the elements, based on `$bace-sizes`. Note, this setting works with `orientation` and `writing-direction` CSS properties.
- `.stack-grow`: sets the margin of the element to `margin-<top/left>: auto`. This allows the element to grow and take the available space (similar to `flex-grow: 1`).
