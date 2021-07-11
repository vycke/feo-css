---
title: Design tokens
category: Introduction
order: 3
---

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

## Size

Generates CSS custom properties: `--size-<name>`. Values are converted towards `rem`. Below is the example with the existing default values of _Feo_ (loosely based on the golden ratio).

```scss
$feo-sizes: (
	'0000': 0.4,
	'000': 0.64,
	'00': 0.8,
	'0': 1,
	'1': 1.25,
	'2': 1.563,
	'3': 1.953,
	'4': 3
);
```

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

Generates CSS custom properties: `--bp-<name>`. The values should have units attached to them, as shown by the example below.

```scss
$feo-breakpoints: (
	'lg': 20rem,
	'article': 60ch,
	'mobile' 320px
);
```

Used in:

- [Horizontal center layouts](/center)
- [Panel layout](/panel)
- [Tile system](/tiles)
