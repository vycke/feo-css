---
layout: base.njk
title: Home
order: 1
key: home
---

Feo.css is a small CSS library (<5kB) that gives you a good starting point on any project. It provides you with sensible defaults for standard HTML elements, and some CSS classes around layout patterns and simple utility classes. A solid CSS foundation
and architecture speeds up everything. Feo.css provides that.

<details>
  <summary>Did you know?</summary>
  <p>1. The name Feo means "front-end optimized". It also happens to mean "ugly" in Spanish. Happy coincidence, don't you think?</p>
  <p class="mt-00">2. Everything on this site, is purely based on the library. Ok, almost <a href="https://github.com/vyckes/feo-css/blob/main/public/demo.css">everything</a> (less than 100 lines of CSS required).</p>
</details>

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

## Naming conventions

Feo.css has some particular naming conventions that are important to know and understand. In particular two naming patterns.

#### Design tokens

Tokens like sizing and breakpoints are considered to have a "baseline". The most common value for the design token. Those tokens always have a `-0` as the post-fix in their naming (e.g. `--token-size-0`). For each step higher, the number is increased (e.g. `--token-size-2`). In case of lowering steps, we _add_ a `0` to the token name (e.g. `--token-size-000`). This convention is chosen as it is seen to be more readable compared to `--token-size--1` (note the double dash).

#### Class utilities

[Utility classes](/utilities) are classes that do one thing, and one thing well. _Class utilities_ are classes that that allow you to control one aspect from a different CSS class, like a layout class. Class utilities on their own have no impact whatsoever, in contract to utility classes. Class utilities have a `--` post-fix, to make them easily spottable (as in most cases they alter interal custom properties).
