---
layout: base.njk
title: Layouts
order: 3
key: layouts
---

Feo.css offers classes for standardized layout patterns that you see on almost every website or application.

<details class="accordion">
  <summary>Class utilities</summary>
  <p><a href="/utilities">Utility classes</a> are classes that do one thing, and one thing well. <i>Class utilities</i> are classes that that allow you to control one aspect from a different CSS class, like a layout class. Class utilities on their own have no impact whatsoever, in contract to utility classes. Class utilities have a <code>--</code> post-fix, to make them easily spottable (as in most cases they alter interal custom properties).</p>
  <p class="mt-00">All class utilities alter internal custom properties labeled <code>--layout-*</code>. These custom properties are <i>shared</i> between the layout classes. </p>
</details>

The available layout classes in Feo.css are listed below.

{% set items = collections.all | subitems("layouts") %}
{% include "partials/sublist.njk" %}
