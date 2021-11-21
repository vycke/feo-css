---
title: Token-based
category: Utilities
order: 1
---

## Background-color

Based on the `$bace-colors` and `$bace-themes` settings from your [design tokens](/themes), utility classes for background-color are generated. Utility classes that trigger when a pseudo-class is triggered, are also facilitated. The following classes are available:

- `.bg-<name>`
- `.hover:bg-<name>`
- `.focus:bg-<name>`
- `.active:bg-<name>`

## Border

Based on the `$bace-colors` and `$bace-themes` settings from your [design tokens](/themes), utility classes for borders are generated. These by default provide a `1px solid` border in the corresponding color. Utility classes that trigger when a pseudo-class is triggered, are also facilitated. The following classes are available:

- `.border-<t/r/b/l>-<name>`
- `.hover:border-<t/r/b/l>-<name>`
- `.focus:border-<t/r/b/l>-<name>`

In addition, several `.border-w-<name>` are available to give borders a different width. The available sizes are 1, 2, 3, 4 and 5, which translate to `px`.

## Radius

Based on the `$bace-sizes` array from your [design tokens](/themes), utility-classes for border radius are generated. These follow the structure of `.radius-<name>`. These classes set the `border-radius` property on the element, meaning _all_ its corners.

## Margin and padding

Based on the `$bace-sizes` array from your [design tokens](/themes), utility-classes for padding and margin are generated. Next to the values from `$bace-sizes`, the 'name' `none` is also available, to overwrite standard set spacing. The following classes are available:

- `.(p/m)-<name>`: sets the padding/margin on all sides.
- `.(p/m)x-<name>`: sets the padding/margin on `-left` and `-right`.
- `.(p/m)y-<name>`: sets the padding/margin on `-top` and `bottom`.
- `.(p/m)l-<name>`: sets the padding/margin on `-left`.
- `.(p/m)r-<name>`: sets the padding/margin on `-right`.
- `.(p/m)t-<name>`: sets the padding/margin on `-top`.
- `.(p/m)b-<name>`: sets the padding/margin on `-bottom`.

## Text color, font-sizes and font family

Based on the `$bace-colors` and `$bace-themes` settings from your [design tokens](/themes), utility classes for text colors are generated. Utility classes that trigger when a pseudo-class is triggered, are also facilitated. The following classes are available:

- `.text-<name>`
- `.hover:text-<name>`
- `.focus:text-<name>`
- `.active:test-<name>`

In addition, based on the `$bace-sizes`, additional utility classes are generate, in the format `.text-<name>`.

> If names from `$bace-sizes` and `$bace-colors` collide, the former takes precedence.

Lastly, based on `$bace-font-families`, utility classes are generated that allow you to set the font-family on an element. These classes follow the structure of `.<name>`.

## Width, min-width, and max-width

Based on the `$bace-breakpoints` settings from your [design tokens](/themes), utility classes around width are generated.

- `.w-<name>`
- `.minw-<name>`
- `.maxw-<name>` (also applies `width: 100%`)
- `.w-full` (sets `width: 100%`)
