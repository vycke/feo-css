---
title: Design tokens
category: Introduction
order: 3
---

## Naming convention

_Feo_ provides some default design token values (that can be overwritten). These tokens follow a specific naming convention. The idea of the naming convention is to align with how developers think when implementing a design. Most developers do not think: "This margin needs to be 8px instead of 6px". They think: "it needs to be bigger/smaller than it is right now". The naming convention aligns with this trail of thought.

Every array has a baseline which flagged as `0`. every stage bigger adds `+1` to the number. Every stage smaller adds a `0` to the name. This method allows you to quickly see if you are moving up or down compared to the baseline, instead mentally mapping the semantic value.

## Colors

Generates CSS custom properties: `--color-<name>`.

```scss
$feo-colors: (
	'black': #000
);
```

Used in:

- [Background color](/token-based#background-color)
- [Border color](/token-based#border)
- [Text color](/token-based#text-color-font-sizes-and-font-family)

## Size & fluidity

Based on `$feo-sizes`, CSS custom properties are generated: `--size-<name>`. Below are the default values of _Feo_ which can be overwritten.

```scss
$feo-sizes: (
	'000': 0.64rem,
	'00': 0.8rem,
	'0': 1rem,
	'1': 1.25rem,
	'2': 1.563rem,
	'3': 1.953rem
);
```

> The default values for `$feo-sizes` are based on [type-scale](https://type-scale.com/). This allows for harmonic UIs.

When you want fluid sizes (sizes that scale based on the screen-width), you can simply set `$feo-fluid: true`. This will scale the above sizes between the ratios `1` and `1.2` for the small values (smaller or equal to 1), and between `0.8` and `1.2` for the larger values.

Used in:

- [Horizontal center layouts](/center)
- [Panel layout](/panel)
- [Tile system](/tiles)
- [Flow](/flow)
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

> Breakpoints are _not_ used around media-queries in _Feo_. Within _Feo_ our opinion is that breakpoints should be used as their name suggests: when your layout breaks. These are not driven by standardized sizes (e.g. mobile `320px`). They are case-by-case driven. Good responsive design goes beyond fixed "breakpoints" set by other frameworks.

Generates CSS custom properties: `--bp-<name>`. Below are the default values of _Feo_ which can be overwritten.

```scss
$feo-breakpoints: (
	'00': 15rem,
	'0': 20rem,
	'1': 26.66rem,
	'2': 35.54rem,
	'3': 47.37rem,
	'4': 63.15rem,
	'5': 84.17rem
);
```

> The values of `$feo-breakpoints` are based on the formula: `f_i = f_0 * (1.333 ^ i)`

Used in:

- [Horizontal center layouts](/center)
- [Panel layout](/panel)
- [Tile system](/tiles)
