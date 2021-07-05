---
title: Holy grail
category: Layout
source: https://github.com/crinklesio/feo-css/blob/main/src/layout/_grail.scss
---

The holy grail of all (old-school) websites and applications: a sticky header and footer, sidebars on the side and a body that fills all the available space, as displayed below.

![](/img/grail.png)

Key elements of this implementation: 

- The header, footer and sidebar are discarded when not used as child elements in this layout class. 
- The body is scrollable. The header, footers and sidebar will remain.

The `.grail` classes requires a specific implementation to work. The header, footer and body require specific HTML tags for the class to work. However, the sidebars can use any HTML tag (`<div>`, `<aside>`, etc.).

```html
<div class="grail">
  <header>Header</header>
  <div class="any class here">sidebar</div>
  <main>Scrollable content</main>
  <div class="any class here">sidebar</div>
  <footer>Footer</footer>
</div>
```