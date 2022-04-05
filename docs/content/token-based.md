---
title: Token-based
category: Utilities
order: 1
---

## Background-color

Based on the `$feo-colors` and `$feo-themes` settings from your [design tokens](/themes), utility classes for background-color are generated. Utility classes that trigger when a pseudo-class is triggered, are also facilitated. The following classes are available:

- `.bg-<name>`
- `.hover:bg-<name>`
- `.focus:bg-<name>`
- `.active:bg-<name>`

## Border

Based on the `$feo-colors` and `$feo-themes` settings from your [design tokens](/themes), utility classes for borders are generated. These by default provide a `1px solid` border in the corresponding color. Utility classes that trigger when a pseudo-class is triggered, are also facilitated. The following classes are available:

- `.border-<t/r/b/l>-<name>`
- `.hover:border-<t/r/b/l>-<name>`
- `.focus:border-<t/r/b/l>-<name>`

In addition, several `.border-w-<name>` are available to give borders a different width. The available sizes are 1, 2, 3, 4 and 5, which translate to `px`.

## Radius

Based on the `$feo-sizes` array from your [design tokens](/themes), utility-classes for border radius are generated. These follow the structure of `.radius-<name>`. These classes set the `border-radius` property on the element, meaning _all_ its corners.

## Margin and padding

Based on the `$feo-sizes` array from your [design tokens](/themes), utility-classes for padding and margin are generated. Next to the values from `$feo-sizes`, the 'name' `none` is also available, to overwrite standard set spacing. The following classes are available:

- `.(p/m)-<name>`: sets the padding/margin on all sides.
- `.(p/m)x-<name>`: sets the padding/margin on `-left` and `-right`.
- `.(p/m)y-<name>`: sets the padding/margin on `-top` and `bottom`.
- `.(p/m)l-<name>`: sets the padding/margin on `-left`.
- `.(p/m)r-<name>`: sets the padding/margin on `-right`.
- `.(p/m)t-<name>`: sets the padding/margin on `-top`.
- `.(p/m)b-<name>`: sets the padding/margin on `-bottom`.

## Width, min-width, max-width, `display:none` media queries

Based on the `$feo-breakpoints` settings from your [design tokens](/themes), utility classes around width are generated.

- `.w-<name>`
- `.minw-<name>`
- `.maxw-<name>` (also applies `width: 100%`)
- `.hide-<name>` (sets a media-query for `max-width` and sets `display: none !important`)
- `.w-full` (sets `width: 100%`)
- `.h-full` (sets `min-height: 100vh`)
