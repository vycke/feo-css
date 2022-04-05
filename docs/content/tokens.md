---
title: Design tokens
category: Introduction
order: 3
---

## Naming convention

_Feo CSS_ provides some default design token values (that can be overwritten). These tokens follow a specific naming convention. The idea of the naming convention is to align with how developers think when implementing a design. Most developers do not think: "This margin needs to be 8px instead of 6px". They think: "it needs to be bigger/smaller than it is right now". The naming convention aligns with this trail of thought.

Every array has a baseline which flagged as `0`. every stage bigger adds `+1` to the number. Every stage smaller adds a `0` to the name. This method allows you to quickly see if you are moving up or down compared to the baseline, instead mentally mapping the semantic value.

## Colors

Generates CSS custom properties: `--color-<name>`.

Used in:

- [Background color](/token-based#background-color)
- [Border color](/token-based#border)
- [Text color](/token-based#text-color-font-sizes-and-font-family)

## Size & fluidity

Based on `$feo-sizes`, CSS custom properties are generated: `--size-<name>`. Below are the default values of _Feo CSS_ which can be overwritten.

```scss
$feo-sizes: (
  'none': 0,
  '000': 0.56,
  '00': 0.75,
  '0': 1,
  '1': 1.33,
  '2': 1.78,
  '3': 2.37,
  '4': 3.16,
  '5': 4.21,
;
```

> The values of `$feo-sizes` are based on the formula: `f_i = f_0 * (1.333 ^ i)`

When you want fluid sizes (sizes that scale based on the screen-width), you can simply set `$feo-fluid: true`. This will scale the above sizes between the ratios `1.1` and `1.2` for the small values (smaller or equal to 1), and between `0.9` and `1.2` for the larger values. Fluid sizing is opt-in. This means that you have to set `$feo-fluid:true`. In addition, you have to apply the tokens to the elements you want fluidity. If you don't provide this on an element or any of the parent elements, it will fallback to the default of `16px` as the base font-size.

Used in:

- [Horizontal center layouts](/center)
- [Stack layout](/stack)
- [Margin and padding](/token-based#margin-and-padding)
- [Corner radius](/token-based#radius)
- [Font sizes](/token-based#text-color-font-sizes-and-font-family)

## Font families

Generates CSS custom properties: `--<name>`. Below snippit shows the default values, which can be overwritten.

```scss
$feo-font-families: (
	monospace: "Inconsolata, Menlo, Monaco, Consolas, 'Courier New', monospace",
	serif: 'Georgia, serif',
	sans-serif:
		"system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
);
```

Used in:

- [Font families](/token-based#text-color-font-sizes-and-font-family)

## Breakpoints

> Breakpoints are _not_ used around media-queries in _Feo CSS_. Within _Feo CSS_ our opinion is that breakpoints should be used as their name suggests: when your layout breaks. These are not driven by standardized sizes (e.g. mobile `320px`). They are case-by-case driven. Good responsive design goes beyond fixed "breakpoints" set by other frameworks.

Generates CSS custom properties: `--bp-<name>`. Below are the default values of _Feo CSS_ which can be overwritten. The default values are based on `$feo-sizes * 20rem`. This means `--bp-0: 20rem`.

Used in:

- [Horizontal center layouts](/center)
- [Sidebar layout](/sidebar)
- [Tile system](/tiles)
- [Switcher](/switcher)
- [Width utilities](/token-based)
