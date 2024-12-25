---
layout: base.njk
title: Utilities
order: 5
key: utilities
---

Utility classes are classes that do one thing, and one thing well. They are different _class utilities_, like the one used in
[layouts layer](/layouts).

<details class="accordion">
  <summary>Limited offering</summary>
  <p>Feo.css offers a very limited set of utility classes. The expectation is that most design tokens will not remain, especially colors. Therefor, only common utility classes unrelated to design tokens are given, and a limited set of utility classes based on the <code>--token-size-{z}</code> and <code>--token-bp-{z}</code> tokens.</p>
</details>

{% set items = collections.all | subitems("utilities") %}
{% include "partials/sublist.njk" %}
