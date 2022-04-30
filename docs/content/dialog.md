---
title: Dialog
category: Layout
source: https://github.com/kevtiq/feo-css/blob/main/src/layout/_dialog.scss
---

The `.dialog` class allows you to create an overlay on the screen with a box centered on top of everything else, like a modal or dialog. It requires the structure shown below. You have a wrapper element with the `.dialog` class, and you should have a single child element in it. The child element is positioned in the center, while the `.dialog` element can be extended with your own classes (e.g. background classes).

```html
<div class="dialog">
	<div>My dialog</div>
</div>
```

## Utility classes

The available utility classes to alter the settings for `.dialog` are listed below.

- `.dialog-w-<name>`: set the max-width of the dialog element (the inner child element). Based on `$feo-breakpoints`.
- `.dialog-g-<name>`: set the padding around the dialog element (the inner child element). The padding is applied to all direct children of the parent. Based on `$feo-sizes`.

> If the utility classes are not flexible enough and you want to adjust the way the layout pattern behaves, adjust the `--dialog-gutter`, and/or `--dialog-width` custom properties on the element you are applying this pattern to.
