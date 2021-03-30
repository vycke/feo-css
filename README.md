# css-framework

A tiny (S)CSS framework that implements the [CUBE CSS](https://cube.fyi) methodology.

## Configure

In the `src/_tokens.scss` file, lists of SCSS variables can be set to generate CSS utility classes, but also generate CSS custom properties. Additional SCSS variables and CSS custom properties can be set in this file, that can be used elsewhere (e.g. in blocks).

## Layout

Currently implemented layout patterns:

- `center-layout`: horizontal centers element on the screen, using CSS grids. This method allows for children to responsively expand the center layout and fill the available space.
- `flow`: vertical rhythm using the method of the [Owl Selector](https://crinkle.dev/writing/an-ode-to-the-css-owl-selector/).
- `pancake`: auto sized header and footer, with the body filling the vertical space.
- `splitter`: responsive container that splits the screen in half, until a certain point, after which the elements are vertically stacked.
- `tiles`: responsive (tile system)[https://crinkle.dev/writing/css-layout-patterns/].

## Utilities

CSS classes that alter a single property, based on the set SCSS variables in the `_tokens.scss` file. In addition, some more utility classes that do a single thing well.

- `background`: classes generated based on color settings, also for `:hover`, `:focus`, `:active` and `:checked` pseudo-classes, for `background-color`;
- `center`: creates a container of which the children are centered;
- `click-area`: makes an entire container clickable based on the presence of a single `<a />` tag;
- `hidden`: visually hide an element;
- `spacing`: `padding` and `margin` classes based on the spacing settings;
- `radius`: utilities for the `border-radius` property;
- `typography`: `font-size` and `color` classes, based on the font-sizes and color settings.

## Blocks

Blocks should be very project specific. For compleness sake, an example class is added.
