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

- `.border-<name>`
- `.hover:border-<name>`
- `.focus:border-<name>`

In addition, several `.border-w-<name>` are available to give borders a different width. The available sizes are 1, 2, 3, 4 and 5, which translate to px`. 

## Radius

Based on the `$feo-spacing` array from your [design tokens](/themes), utility-classes for border radius are generated. These follow the structure of `.radius-<name>`. These classes set the `border-radius` property on the element, meaning *all* its corners.

## Transition

Classes that enable you to set CSS transitions on all transitional attributes of an element, as shown below. The available lengths are: 100, 200, 300, 400 and 500. 

```css
.transition-<length> {
  transition: all <length>ms ease-in-out. 
}
```

> The transition length are *not* configurable in *Feo*.

## Margin and padding

Based on the `$feo-spacing` array from your [design tokens](/themes), utility-classes for padding and margin are generated. The following classes are available: 

- `.(p/m)-<name>`: sets the padding/margin on all sides.
- `.(p/m)x-<name>`: sets the padding/margin on `-left` and `-right`.
- `.(p/m)y-<name>`: sets the padding/margin on `-top` and `bottom`.
- `.(p/m)l-<name>`: sets the padding/margin on `-left`.
- `.(p/m)r-<name>`: sets the padding/margin on `-right`.
- `.(p/m)t-<name>`: sets the padding/margin on `-top`.
- `.(p/m)b-<name>`: sets the padding/margin on `-bottom`.

## Text color, font-sizes and font family

Based on the `$feo-colors` and `$feo-themes` settings from your [design tokens](/themes), utility classes for text colors are generated. Utility classes that trigger when a pseudo-class is triggered, are also facilitated. The following classes are available:

- `.text-<name>`
- `.hover:text-<name>`
- `.focus:text-<name>`
- `.active:test-<name>`

In addition, based on the `$feo-font-sizes`, additional utility classes are generate, in the format `.text-<name>`.

> If names from `$feo-font-sizes` and `$feo-colors` collide, the former takes precedence. 

Lastly, based on `$feo-font-families`, utility classes are generated that allow you to set the font-family on an element. These classes follow the structure of `.<name>`. 