---
layout: base.njk
title: Click-area
key: utilities
subkey: click-area
---

Makes the entire element with this class clickable, based on the
first `<a />` it can find in its (sub-)DOM. It does not
have to be a direct descender.

<details class="accordion">
  <summary>A word of caution</summary>
  <p>not all elements support <code>::after</code> in all browsers, (e.g. <code>tr</code>) in at least Safari. This means that <code>.click-area</code> will expand to the next parent (which could well be the entire page). Always test your work in multiple browsers!</p>
</details>
