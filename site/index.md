---
layout: base.njk
title: Overview
key: home
---

Feo.css is a small CSS library that gives you a good starting point on any project. It provides you with sensible defaults for standard HTML elements, and some CSS classes around layout patterns and simple utility classes.

_NOTE: everything on this site, is purely based on the library. Ok, almost [everything](https://github.com/vyckes/feo-css/blob/main/public/demo.css)._

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

Or install it via NPM using your package manager of choice:

```
npm install feo-css
yarn add feo-css
```

## Setup and architecture

The architecture of Feo.css is in line with
[CUBE CSS](https://cube.fyi) and implements
[generic layout patterns](https://every-layout.dev). By
combines modern CSS techniques like `@layer` and CSS
custom properties, it is fully _extensible_.

```
@layer reset, tokens, global, layout, utilities, components;
```

The layers indicate the level of importance, meaning: try to solve
things with HTML elements first. If that is not enough, use
generic layout patterns, and some utilities. In more complex
settings, use components.

1. [CSS reset](https://github.com/vyckes/feo-css/blob/main/src/reset.css)
2. [Design tokens](/tokens)
3. [Global css for HTML elements](https://github.com/vyckes/feo-css/blob/main/src/global.css)
4. [Layout patterns](/layouts)
5. [Utility classes](/utilities)
6. [Components](/components)

Because Feo.css is build using `@layer`, you can easily
extend and avoid cascading issues, by including your own CSS in
the proper layer.