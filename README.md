# Feo CSS: A tiny CSS framework

A tiny (S)CSS framework that implements parts of the [CUBE CSS](https://cube.fyi) methodology. It combines layout patterns, utilities with custom properties. More information about my personal idea behnid it, can be found [here](https://crinkle.dev/writing/my-css-architecture).

> LUB: layout, utility, block

## Gettings started

Import the `feo.scss` file from the package into the index of your `.scss` file, after defining your own token values.

```scss
@import './your-tokens';
// Use ~<package-name>/file-name.scss for .scss files on node_modules
@import '~@crinkles/feo/feo.scss';
```

In the `src/_default-tokens.scss` file, lists of SCSS variables can be set overwritten to generate custom properties and utility classes that refer to these custom properties. Available SCSS variables that can be overwritten are: `$colors`, `$font-sizes`, `$spacing`, `$sizes`, and `$radius`.

Based on these settings, utility classes, but also CSS custom properties are generated for you, in the structure outlined below.

```scss
$colors: (
  'black': #000,
  'white': #fff,
);

:root {
  @each $name, $color in $colors {
    --#{$name}: #{$color};
  }
}

@each $name, $color in $colors {
  .bg-#{$name} {
    background-color: var(--#{$name});
  }
}
```

## Available layout & layout utility classes

### `.center`

Horizontal centering of elements based on a configurable width, using CCSS grids under the hood. This allows individual elements to be taken out of the center flow and span the full width of the page (e.g. which comes in handy for images in articles). More explanation of this pattern can be found [here](https://crinkle.dev/writing/css-layout-patterns#dynamic-centered-layout).

- `.center-w-{name}`: set the `max-width` of the layout, based on `$sizes`. Default set to `.center-w-4`.
- `.center-p-{name}`: set the padding on the aside, based on `$spacing`.. Default set to `.center-p-0`.

### `.flow`

vertical rhythm using the method of the [Owl Selector](https://crinkle.dev/writing/an-ode-to-the-css-owl-selector).

- `.flow-g-{name}`: set the gap between the elements, based on `$spacing`. Default set to `.flow-g-0`.
- `.flow-b-{name}`: can be set on a child. Alters the gap between chosen child and the next child.
- `.flow-t-{name}`: can be set on a child. Alters the gap between the chosen child and the previous child.

### `.pancake`

A default header-body-footer pattern, where the body takes all the available space. It has no additional utility classes linked to it.

### `.split-left` & `.split-right`

A two-column responsive layout that becomes a one-column layout below a certain screen-width. Depending on the chosen mode, either the left, or right column is controllable through utility classes. When setting one column to a fixed width, the other column will automatically take the available space.

- `.split-g-{name}`: set the `gap` property, based on `$spacing`. This applies it to the horizontal and vertical gap (on small screens). Default set to `.splitter-g-0`.
- `.split-w-{name}`: set the `width` of an controllable column, based on `$sizes`. Default set to `50%`.
- `.split-min-w-{name}`: set the `min-width` of both columns based on `$sizes`. Default set to `.splitter-min-w-0`.

### `.tiles`

Responsive [tile system](https://crinkle.dev/writing/css-layout-patterns#responsive-multi-column-grid-system).

- `.tiles-g-{name}`: set the `grid-row-gap` and `grid-column-gap`, based on `$spacing`. Default set to `.tiles-g-0`.
- `.tiles-w-{name}`: set the `min-width` of an individual item, based on `$sizes`. Default set to `.tiles-w-0`.

### `grail`

The holy grail layout like displayed below. It automatically discards headers, footers or the two sidebars when these do not exist.

```
fixed header
--------------------------------
aside | scrollable      | aside
      | content         |
      |                 |
      |                 |
--------------------------------
fixed footer
```

The holy grail requires specific usage of HTML-tags.

```html
<div className="grail">
  <header>Header</header>
  <div class="any class here">sidebar</div>
  <main>Scrollable content</main>
  <div class="any class here">sidebar</div>
  <footer>Footer</footer>
</div>
```

## Utilities

Based on the defined variables, many utility classes are generated, that refer to the corresponding custom property. Most of these utility classes alter a single property. Some utility classes alter more properties, but combined do one thing.

- `.bg-{name}`, `.hover:bg-{name}`, `.active:bg-{name}`, `.focus:bg-{name}`, `.checked:bg-{name}`: set the `background-color`, based on `$colors`.
- `.click-area`: makes a parent completely clickable, based on the presence of a single `<a>` tag in one of the children.
- `.place-center`: places all children in the center of the screen.
- `.visually-hidden`: visually hides an element of users, but not for screen readers.
- `.m[xytlbr]-{name}`: set the `margin`, including a direction, based on `$spacing`.
- `.p[xytlbr]-{name}`: set the `padding`, including a direction, based on `$spacing`.
- `.radius-{name}`: set the `border-radius`, including a direction, based on `$radius`.
- `.border-{name}`: set the `border-color`, including a direction, based on `$colors`. It also sets the `border-style` to `solid`.
- `.radius-w-{name}`: set the `border-width` in `px`, with values from 1 to 5.
- `.text-{colorname}`, `.text-{fontsizename}`: sets the `color` and `font-size` properties, based on `$colors` and `$font-sizes`.
- Several classes altering typography properties, like text-decoration.
- All combinations round flexboxes as utility classes.
