---
title: Flow
category: Layout
source: https://github.com/crinklesio/feo-css/blob/main/src/layout/_flow.scss
---

The `.flow-<x/y>` applies horizontal or vertical rhythm for elements. Based on the [Owl selector](https://crinkles.io/writing/an-ode-to-the-css-owl-selector), spacing between the elements is arranged.

![](/img/flow.png)

## Utility classes

The way `.flow` behaves can be controlled with several utility classes.

- `.flow-g-<name>`: set the gap between the elements, based on `$feo-sizes`. Note, this setting works with `orientation` and `writing-direction` CSS properties.
- `.flow-next-<name>`: can be set on a child. Alters the gap between chosen child and the next child (the effect is applied to the next child). Based on `$feo-sizes`.
- `.flow-self-<name>`: can be set on a child. Alters the gap between the chosen child and the previous child (the effect is applied to itself). Based on `$feo-sizes`.
- `.flow-grow`: sets the margin of the element to `margin-<top/left>: auto`. This allows the element to grow and take the available space (similar to `flex-grow: 1`).
