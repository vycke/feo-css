---
title: How it works
category: Introduction
order: 2
---

*Feo* transforms all configured design tokens from SCSS variables to CSS custom properties. These CSS custom properties are used in all utilities classes that are generated based on the configured design tokens. 

## Generating utility code
Let's look at the example color configuration below.

```scss
// tokens.css
$feo-colors: (
  'black': #000,
  'white': #fff,
);

$feo-spacing: (
  'sm': 1rem,
);
```

This generates in compile tile the following CSS custom properties.

```css
:root {
  --color-black: #000;
  --color-white: #000;
  --spacing-sm: 1rem;
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

.p-sm {
  padding: var(--spacing-sm);
}
```

## Usage in layout classes
With various layout classes you have the ability to change internal settings based on your design tokens. For the `.panel` class (more information [here](/panel)), you can set the gap between the two main elements using utility classes. Internally layout classes do not directly point towards the CSS custom properties, but have internal properties. By using the utility classes, you can change to reference to a different CSS custom property based on your design tokens.  

```css
.panel-g-sm {
  --panel-gap: var(--spacing-sm);
}
``` 