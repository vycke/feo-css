---
title: Stack
category: Layout
source: https://github.com/kevtiq/feo-css/blob/main/src/layout/_stack.scss
---

The `.stack` applies vertical rhythm for elements. Based on the [Owl selector](https://crinkles.io/writing/an-ode-to-the-css-owl-selector), spacing between the elements is arranged. There are various reasons this pattern does not use the `gap` property. The most common reason is that this implementation allows for more control on exceptions (e.g. have a smaller gap on `h2 + p`).

![](/img/stack.png)

## Utility classes

The way `.stack` behaves can be controlled with several utility classes.

- `.stack-g-<name>`: set the gap between the elements, based on `$feo-sizes`. Note, this setting works with `orientation` and `writing-direction` CSS properties.
- `.stack-grow`: sets the margin of the element to `margin-<top/left>: auto`. This allows the element to grow and take the available space (similar to `flex-grow: 1`).
