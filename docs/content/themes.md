---
title: Themes
category: Introduction
order: 4
---

With _Feo CSS_ it is possible to define multiple themes. Within a theme, color-based custom properties are generated. In `$feo-dark-theme` and `$feo-light-theme` you define lists similar to `$feo-colors`. The difference, however, is that you don't set the color, but you set a reference to a color in `$feo-colors`, as shown below. This results in themes being created that can be applied using `data-theme` on elements.

> If you have a duplicate name between `$feo-colors` and `$feo-dark/light-theme`, the `$feo-colors` one will take precedence.

The generated custom properties are defined in a `@media (prefer-color-scheme: dark/light)` scoping.

```scss
$feo-dark-theme: (
	'back': 'black',
	'front': 'white'
);

.bg-back {
	background-color: var(--color-back);
}
```

> The utility classes are generated based on the first defined theme. If not all themes have the same colors defined, you will miss utility classes, or classes will be broken.
