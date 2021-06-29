# Feo CSS: A tiny CSS framework

A tiny (S)CSS framework that implements parts of the [CUBE CSS](https://cube.fyi) methodology. It combines layout patterns, utilities with custom properties. More information about my personal idea behnid it, can be found [here](https://crinkles.io/writing/my-css-architecture).

> LUB: layout, utility, block

## Gettings started

> NOTE: the framework applies a mimimal CSS reset, including `prefers-reduced-motion`

Import the `feo.scss` file from the package into the index of your `.scss` file, after defining your own token values.

```scss
// _tokens.scss
// List of colors that is used to generate utility classes, but also generate
// CSS custom properties
$colors: (
  'black': #000,
  'white': #fff,
) !default;

// Typography system (golden ratio)
$font-sizes: (
  '0': 1,
  '00': 0.8,
  '000': 0.64,
  '1': 1.25,
  '2': 1.563,
  '3': 1.953,
) !default;

// Spacing system: padding, margin, gap, radius
$feo-spacing: (
  'none': 0,
  '0': 1,
) !default;

// Size system
$sizes: (
  '0': 15rem,
  '1': 30rem,
) !default;

$themes: (
  'dark': (
    'bg-primary': 'black',
    'text-primary': 'white',
  ),
) !default;
```

```scss
@import './tokens';
// Use ~<package-name>/file-name.scss for .scss files on node_modules
@import '~@crinkles/feo/feo.scss';
```

The `src/_default-tokens.scss` file holds the default values of all the available settings. You can overwrite these by creating your own definitions for: `$feo-colors`, `$feo-font-sizes`, `$feo-spacing`, `$feo-sizes`, and `$feo-spacing`.

## Feature flags

Feo CSS allows settings via the 'feature flag' pattern.

```scss
@use '~@crinkles/feo/feo.scss' with (
  $fluid: false/true
);
```

The available feature flags are:

- `$fluid`: allows for fluid font-sizes and spacing values.

> Note: this method does not work with `node-sass` as of now. If you are reliant on `node-sass` you could also set the values of these flags before you import the package. Or you can use the normal `sass` package instead.

## How it works

Based on these settings, utility classes, but also CSS custom properties are generated for you, in the structure outlined below.

```scss
$feo-colors: (
  'black': #000,
);

// creates
:root {
  --color-black: #000;
}

.bg-black {
  background-color: var(--color-black);
}
```

Next to the mentioned you can also configure color schemes (dark-mode anyone?!).

```scss
$feo-themes: (
  // theme name
  'dark':
    (
      // theme-color name + a color name from $feo-colors
      'back': 'black',
      'front': 'white'
    )
);
```

The above configuration will result in the below settings. It takes the theme name, and generates a `data-theme` setting. By changing the value in your HTML, you can change the theme.

```scss
[data-theme='dark'] {
  --color-back: var(--color-black);
  --color-front: var(--color-white);
}

// utility clases are also generated
.bg-back {
  background-color: var(--color-back);
}
```

> NOTE: Be careful with the names, as the same names of keys in a theme overwrites the custom properties based on the `$feo-colors` array.

> NOTE: All utility classes are generated based on the first theme defined in the `$feo-themes` array. If not all themes use the same key-value pairs, the framework might break your theme.

## Available layout & layout utility classes

### `.center`

Horizontal centering of elements based on a configurable width, using CCSS grids under the hood. This allows individual elements to be taken out of the center flow and span the full width of the page (e.g. which comes in handy for images in articles). More explanation of this pattern can be found [here](https://crinkles.io/writing/css-layout-patterns#dynamic-centered-layout).

- `.center-w-{name}`: set the `max-width` of the layout, based on `$feo-sizes`.
- `.center-g-{name}`: set the padding on the aside, based on `$feo-spacing`. Note, this setting works with `orientation` and `writing-direction` CSS properties.
- `.center-exception`: an item that can flow outside the boundaries of the center content.

### `.flow-x` and `.flow-y`

vertical rhythm using the method of the [Owl Selector](https://crinkles.io/writing/an-ode-to-the-css-owl-selector).It auto applies `display: flex`.

- `.flow-g-{name}`: set the gap between the elements, based on `$feo-spacing`. Note, this setting works with `orientation` and `writing-direction` CSS properties.
- `.flow-next-{name}`: can be set on a child. Alters the gap between chosen child and the next child (the effect is applied to the next child).
- `.flow-self-{name}`: can be set on a child. Alters the gap between the chosen child and the previous child (the effect is applied to itself).

### `.panel-l` & `.panel-r`

A two-column responsive layout that becomes a one-column layout below a certain screen-width. Depending on the chosen mode, either the left, or right column is controllable through utility classes. When setting one column to a fixed width, the other column will automatically take the available space.

- `.panel-g-{name}`: set the `gap` property, based on `$feo-spacing`. This applies it to the horizontal and vertical gap (on small screens).
- `.panel-s-{name}`: set the `width` (or size!) of the controllable panel, based on `$feo-sizes`.
- `.panel-w-{name}`: set the `min-width` of the wrapper, based on `$feo-sizes`.

### `.tiles`

Responsive [tile system](https://crinkles.io/writing/css-layout-patterns#responsive-multi-column-grid-system).

- `.tiles-g-{name}`: set the `gap` property, based on `$feo-spacing`.
- `.tiles-w-{name}`: set the `min-width` of an individual item, based on `$feo-sizes`.

### `.pancake`

A default header-body-footer pattern, where the body takes all the available space. It has no additional utility classes linked to it.

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

### `.table-responsive`

Allows for a style-less, responsive (i.e. scrollable) table with fixed headers. Additional utility class allows for fixed first columns as well (`.table-fixed-column`). This requires the HTML structure shown below.

```html
<table>
  <thead>
    <tr>
      <th />
      <th>Col Header</th>
      <th>Col Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row Header</th>
      <td>Cell Data</td>
      <td>Cell Data</td>
    </tr>
  </tbody>
</table>
```

> NOTE: the first `<th />` in the `thead`, and the `th` in the `tbody` are only required when working with the `.table-fixed-column` class.

## Utilities

Based on the defined variables, many utility classes are generated, that refer to the corresponding custom property. Most of these utility classes alter a single property. Some utility classes alter more properties, but combined do one thing.

- `.bg-{name}`, `.hover:bg-{name}`, `.active:bg-{name}`, `.focus:bg-{name}`, `.checked:bg-{name}`: set the `background-color`, based on `$feo-colors`.
- `.click-area`: makes a parent completely clickable, based on the presence of a single `<a>` tag in one of the children.
- `.visually-hidden`: visually hides an element of users, but not for screen readers.
- `.m[xytlbr]-{name}`: set the `margin`, including a direction, based on `$feo-spacing`.
- `.p[xytlbr]-{name}`: set the `padding`, including a direction, based on `$feo-spacing`.
- `.radius-{name}`: set the `border-radius`, including a direction, based on `$feo-spacing`.
- `.border-{name}`: set the `border-color`, including a direction, based on `$feo-colors`. It also sets the `border-style` to `solid`.
- `.radius-w-{name}`: set the `border-width` in `px`, with values from 1 to 5.
- `.text-{colorname}`, `.text-{fontsizename}`: sets the `color` and `font-size` properties, based on `$feo-colors` and `$feo-font-sizes`. Font-sizes are [fluid](https://crinkles.io/writing/fluid-interfaces-using-css)
- Several classes altering typography properties, like text-decoration.
- All combinations round flexboxes as utility classes.
- `transition-{length}`: utility class to set transition to `all {length} ease-in-out`. Available lengths are: 100ms, 200ms, 300ms, 400ms, 500ms.
