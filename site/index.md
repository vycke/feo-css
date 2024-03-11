---
layout: base.njk
title: Home
order: 1
key: home
---

Feo.css is a small CSS library that gives you a good starting point on any project. It provides you with sensible defaults for standard HTML elements, and some CSS classes around layout patterns and simple utility classes.

<details>
  <summary>Did you know?</summary>
  <p>The name Feo means "front-end optimized". It also happens to mean "ugly" in Spanish. Happy coincidence, don't you think?</p>
</details>

_NOTE: everything on this site, is purely based on the library. Ok, almost [everything](https://github.com/vyckes/feo-css/blob/main/public/demo.css)_ (less than 100 lines of CSS required).

## Why?

I find myself always copying over the basic CSS to get started on
development. It does not matter if it is a B2B application, a
demo, a content website, or a side project. A solid CSS foundation
and architecture speeds up everything. Feo.css provides that.

## How to use it

Use the _unpkg.com_ CDN directly in your `head` of your HTML page:

```
<link rel="stylesheet" href="https://unpkg.com/feo-css/feo.min.css">
```

Import it in your (S)CSS:

```
@import "https://unpkg.com/feo-css/feo.min.css";
```

Or install it via NPM using your package manager of choice:

```
npm install feo-css
yarn add feo-css
```

## Setup and architecture

The architecture of Feo.css follows the principles outlined [here](https://github.com/vyckes/css-architecture).

```
@layer global, layout, blocks, utilities;
```

The layers indicate the level of importance, meaning: try to solve
things with HTML elements first (based on a simple [reset & global css](https://github.com/vyckes/feo-css/blob/main/src/global/_global.css)). If that is not enough, use
generic layout patterns, and some utilities. In more complex
settings, use components.

1. [Design tokens](/tokens) (part of the `global` layer)
2. [Layout patterns](/layouts)
3. [Blocks](/blocks)
4. [Utility](/utilities)

Because Feo.css is build using `@layer`, you can easily
extend and avoid cascading issues, by including your own CSS in
the proper layer.
