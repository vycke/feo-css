---
title: Getting started
category: Introduction
order: 2
---

## Installation

_Feo CSS_ is distributed as an NPM package through the NPM Registry. In can be added to your project by using `npm` or `yarn`.

```bash
npm install feo-css
yarn add feo-css
```

## @import

Depending on the type of project you are running, _Feo CSS_ can be added in several different ways to your project. In all cases, the _Feo CSS_ file needs to be imported into your own `.scss` file. The first method is to use the `@import` function of SCSS.

```scss
$feo-colors: (...);

// Import via relative paths
@import '../../path/to/node_modules/feo-css/feo.scss';
@import '~feo-css/feo.scss';
```

## @use

The second method is to use the newer `@use` of SCSS. This allows you to define and use feature flags of _Feo CSS_. When using the `with` structure, ensure your SCSS variables are defined in the same file. Importing another file before `@use` statements is disallowed by SCSS.

```scss
$colors: (...);

@use '../../path/to/node_modules/feo-css/feo.scss';
@use '~feo-css/feo.scss';

@use '../../path/to/node_modules/feo-css/feo.scss' with (
  $feo-colors: $colors
);
```

> This method does not work when you use the (deprecated) `node-sass` module to parse your SCSS. You have to use the newer `sass` module. In most projects you can easily swap `node-sass` for `sass`.

## How it works

_Feo CSS_ transforms all configured design tokens from SCSS variables to CSS custom properties. These CSS custom properties are used in all utilities classes that are generated based on the configured design tokens. Let's look at the example color configuration below.

```scss
// tokens.css
$feo-colors: (
	'black': #000,
	'white': #fff
);

$feo-sizes: (
	'default': 1rem
);
```

This generates in compile tile the following CSS custom properties.

```css
:root {
	--color-black: #000;
	--color-white: #000;
	--size-default: 1rem;
}
```

Based on the same design tokens, utility classes are generated in various places. These utility classes point towards the CSS custom properties, instead of directly using the corresponding value. The shown example results in at least the following utility classes.

```css
.bg-black {
	background-color: var(--color-black);
}

.bg-white {
	background-color: var(--color-white);
}

.p-default {
	padding: var(--size-default);
}
```
