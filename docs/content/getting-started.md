---
title: Getting started
category: Introduction
order: 2
---

## Installation

_Feo_ is distributed as an NPM package through the NPM Registry. In can be added to your project by using `npm` or `yarn`.

```bash
npm install @crinkles/feo
yarn add @crinkles/feo
```

## @import

Depending on the type of project you are running, _Feo_ can be added in several different ways to your project. In all cases, the _Feo_ file needs to be imported into your own `.scss` file. The first method is to use the `@import` function of SCSS.

```scss
$bace-colors: (...);

// Import via relative paths
@import '../../path/to/node_modules/@crinkles/feo/feo.scss';
@import '~@crinkles/feo/feo.scss';
```

## @use

The second method is to use the newer `@use` of SCSS. This allows you to define and use feature flags of _Feo_. When using the `with` structure, ensure your SCSS variables are defined in the same file. Importing another file before `@use` statements is disallowed by SCSS.

```scss
$colors: (...);

@use '../../path/to/node_modules/@crinkles/feo/feo.scss';
@use '~@crinkles/feo/feo.scss';

@use '../../path/to/node_modules/@crinkles/feo/feo.scss' with (
  $bace-colors: $colors
);
```

> This method does not work when you use the (deprecated) `node-sass` module to parse your SCSS. You have to use the newer `sass` module. In most projects you can easily swap `node-sass` for `sass`.
