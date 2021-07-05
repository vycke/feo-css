---
title: Design tokens & themes
category: Introduction
order: 4
---

## Colors
Generates CSS custom properties: `--color-{name}`.

```scss
$feo-colors: (
  'black': #000
);
```

Used in: 

- [Background color](/token-based#background-color)
- [Border color](/token-based#border)
- [Text color](/token-based#text-color-font-sizes-and-font-family)

## Spacing and radius
Generates CSS custom properties: `--spacing-{name}`. In addition, also generates properties for radius `--radius-{name}`. Values are converted towards `rem`.

```scss
$feo-spacing: (
  'sm': 1
);
```

Used in: 

- [Horizontal center layouts](/center)
- [Panel layout](/panel)
- [Tile system](/tiles)
- [Flow](/flow)
- [Margin and padding](/token-based#margin-and-padding)
- [Corner radius](/token-based#radius)

## Font-sizes
Generates CSS custom properties: `--text-{name}`. Values are converted towards `rem`.

```scss
$feo-font-sizes: (
  'sm': 1
);
```

Used in: 

- [Font sizes](/token-based#text-color-font-sizes-and-font-family)

## Font families

Generates CSS custom properties: `--{name}`. 

```scss
$feo-font-families: (
  'monospace': Menlo, monospace,
);
```

Used in: 

- [Font families](/token-based#text-color-font-sizes-and-font-family)

## Sizes
Generates CSS custom properties: `--size-{name}`.

```scss
$feo-sizes: (
  'lg': 20rem,
  'article': 60ch,
  'mobile' 320px
);
```

Used in: 

- [Horizontal center layouts](/center)
- [Panel layout](/panel)
- [Tile system](/tiles)

## Themes
Generate CSS custom properties for colors. Each theme `feo-themes` is similar to `$feo-colors`. The difference, however, is that you don't set the color, but you set a reference to a color in `feo-colors`, as shown below. This results in themes being created that can be applied using `data-theme` on elements. 

> If you have a duplicate name between `$feo-colors` and `$feo-themes`, the `$feo-themes` one will take precedence. 

The generated custom properties are defined in a `data-theme` scoping. The chosen theme in `data-theme` will only be applied to all children of the element it is applied to. It is not applied to the entire page, unless you apply `data-theme` on the `html` or `body` tags. 

```scss
$feo-themes: (
  'Dark': (
    'back': 'black',
    'front': 'white',
  ),
);

[data-theme="{theme-name}"] {
  --color-back: var(--color-black);
  --color-front: var(--color-white);
}

.bg-back {
  Background-color: var(--color-back);
}
```

> The utility classes are generated based on the first defined theme. If not all themes have the same colors defined, you will miss utility classes, or classes will be broken. 