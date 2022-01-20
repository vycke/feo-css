---
title: Typography
category: Utilities
source: https://github.com/kevtiq/bace-css/blob/main/src/utilities/_typography.scss
---

## Text color, font-sizes and font family

Based on the `$bace-colors` and `$bace-themes` settings from your [design tokens](/themes), utility classes for text colors are generated. Utility classes that trigger when a pseudo-class is triggered, are also facilitated. The following classes are available:

- `.text-<name>`
- `.hover:text-<name>`
- `.focus:text-<name>`
- `.active:test-<name>`

In addition, based on the `$bace-sizes`, additional utility classes are generate, in the format `.text-<name>`.

> If names from `$bace-sizes` and `$bace-colors` collide, the former takes precedence.

Lastly, based on `$bace-font-families`, utility classes are generated that allow you to set the font-family on an element. These classes follow the structure of `.<name>`.

## Line-height

Based on `$bace-sizes`, line-height utility classes and CSS variables are generated. The base value of this array is equal to `$bace-sizes`, but can be set separately.

- `.lh-<name>`

## Text alignment

These classes set the `text-align` on the element, based on the value in the name.

- `.text-right`
- `.text-center`
- `.text-left`
- `.text-start`
- `.text-end`
- `.text-justify`

## Text decoration

- `.bold`: sets the font-weight to 600.
- `.regular`: sets the font-weight to 400.
- `.italic`: makes the text italic.
- `.no-decoration`: removes any decoration in the `text-decoration` property.
