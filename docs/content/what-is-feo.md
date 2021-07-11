---
title: What is Feo?
category: Introduction
order: 1
---

_Feo_ is a tiny SCSS framework based on [CUBE CSS](https://cube.fyi/) from [Andy Bell](https://twitter.com/piccalilli_). In essence, it is a _utility-enabled_ and _utility-first_ framework.

## Core principles

Compared to other frameworks, _Feo_ distinguishes itself by focusing on a few core principles:

- **Custom properties**: all configured design tokens are converted into CSS custom properties that can be changed in runtime. In addition, all utility classes point towards these custom properties, instead of using the SCSS variables during compile time.
- **Layout driven**: a lot of the issues we face are all about layout. And CSS is good in layout. _Feo_ offers several standardized layout solutions that can be altered using additional utility classes for these layouts.
- **Browser defaults**: browsers are implementing more and more default features. These are by default more accessible and usable for users, compared to solutions created by ourselves.

## Write your own CSS

Next to these core principles, _Feo_ encourages you to **write your own CSS**. _Feo_ does not solve everything, it might barely hit 80% of you CSS problems. But it standardizes common problems and common styles and abstracts these away. This allows you to focus on the real issues you need to solve that differ from project to project.

## Opinionated default values

_Feo_ is opinionated. It applies a minimal [CSS reset](https://github.com/crinklesio/feo-css/blob/main/src/_reset.scss), some default [global styles](https://github.com/crinklesio/feo-css/blob/main/src/_global.scss) and sets some default [design tokens](/tokens). The default tokens can be overwritten, the rest not.

The idea behind `$feo-sizes` is that the baseline (`1rem`) is flagged as '0', because it is the baseline. It is not attached to any (possible) semantic or subjective values. Other frameworks tend to use 'sm', 'caption' etc., but the meaning of these values can change over time, or are too specific as a generic variable. With the chosen setup, every stage bigger adds `+1` to the number. Every stage smaller adds a `0` to the name. This method allows you to quickly see if you are moving up or down compared to the baseline, instead mentally mapping the semantic value. The stages themselves are (loosely) based on the golden ratio, and go from `--size-0000` to `--size-3`.

## What does Feo stand for?

Nothing really. At one point my wife was gaming and a character on the screen that caught my eye was called 'Feo Ul'. However, I read it as 'Feo UI', and I liked it. Later it hit me that I was reading it wrong, but the name stuck with me.

## How it works

_Feo_ transforms all configured design tokens from SCSS variables to CSS custom properties. These CSS custom properties are used in all utilities classes that are generated based on the configured design tokens. Let's look at the example color configuration below.

```scss
// tokens.css
$feo-colors: (
	'black': #000,
	'white': #fff
);

$feo-sizes: (
	'default': 1
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
