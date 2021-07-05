---
title: Getting started
category: Introduction
order: 3
---

## Installation

*Feo* is distributed as an NPM package through the NPM Registry. In can be added to your project by using `npm` or `yarn`. 

```bash
npm install @crinkles/feo
yarn add @crinkles/feo
```

## @import
Depending on the type of project you are running, *Feo* can be added in several different ways to your project. In all cases, the *Feo* file needs to be imported into your own `.scss` file. The first method is to use the `@import` function of SCSS.

```scss
$feo-colors: (...);

// Import via relative paths
@import '../../path/to/node_modules/@crinkles/feo/feo.scss';
@import '~@crinkles/feo/feo.scss';
```

## @use
The second method is to use the newer `@use` of SCSS. This allows you to define and use feature flags of *Feo*. When using the `with` structure, ensure your SCSS variables are defined in the same file. Importing another file before `@use` statements is disallowed by SCSS. 

```scss
$colors: (...);

@use '../../path/to/node_modules/@crinkles/feo/feo.scss';
@use '~@crinkles/feo/feo.scss';

@use '../../path/to/node_modules/@crinkles/feo/feo.scss' with (
  $feo-colors: $colors,
  $feo-fluid: true
);
```

> This method does not work when you use the (deprecated) `node-sass` module to parse your SCSS. You have to use the newer `sass` module. In most projects you can easily swap `node-sass` for `sass`.

## Feature flags
*Feo* gives you the ability to change some of it internal workings based on feature flags. These are SCSS variables that can be set based with `true/false` values. The following feature flags are supported:

- `$feo-fluid`: when true, converts all CSS custom properties for font-sizes and spacing into [fluid](https://crinkles.io/writing/fluid-interfaces-using-css) versions. They slightly scale when there is more room on the screen.
