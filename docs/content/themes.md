---
title: Themes
category: Introduction
order: 4
---

With _Feo_ it is possible to define multiple themes. Within a theme, color-based custom properties are generated. In `$bace-themes` you define lists similar to `$bace-colors`. The difference, however, is that you don't set the color, but you set a reference to a color in `$bace-colors`, as shown below. This results in themes being created that can be applied using `data-theme` on elements.

> If you have a duplicate name between `$bace-colors` and `$bace-themes`, the `$bace-colors` one will take precedence.

The generated custom properties are defined in a `data-theme` scoping. The chosen theme in `data-theme` will only be applied to all children of the element it is applied to. It is not applied to the entire page, unless you apply `data-theme` on the `html` or `body` tags.

```scss
$bace-themes: (
	'dark': (
		'back': 'black',
		'front': 'white'
	)
);

[data-theme='{theme-name}'] {
	--color-back: var(--color-black);
	--color-front: var(--color-white);

	//Only for 'light' and 'dark' themes
	color-scheme: 'dark'/'light';
}

.bg-back {
	background-color: var(--color-back);
}
```

> The utility classes are generated based on the first defined theme. If not all themes have the same colors defined, you will miss utility classes, or classes will be broken.

## User preference

For themes called 'dark' or 'light', system preferences are taken into account as well. When no `data-theme` is set, it will fall back to the system prefered color scheme. This is achieved with a `prefers-color-scheme` `@media` query. Below an example of the dark theme if the running example.

```scss
@media (prefers-color-scheme: dark) {
	:root:not([data-theme]) {
		--color-back: var(--color-black);

		color-scheme: dark;
	}
}
```
