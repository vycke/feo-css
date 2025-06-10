---
layout: base.njk
title: Scroll container
parent: utilities
key: scroll-container
---

Allows for vertical scroll within the element, enabled by the `contain: size` property/value. This allows it to be easily used in flex containers (e.g. stretched items across the height of the parent).

<details class="accordion">
  <summary>Note</summary>
  <p>always test the implementation in various use cases. For instance, on this site, the main content uses this class. However, on smaller screens, the `contain: size` needs to be replaced with `contain: none`, as the height would otherwise not fill the available space (due to flex-wrapping).</p>
</details>
