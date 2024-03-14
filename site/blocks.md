---
layout: base.njk
title: Blocks
order: 4
key: blocks
---

A limited set of blocks (mostly based on basic HTML elements,
but are more complex in their implementation).

Several of the below components have an **API**. These are defined CSS custom properties specified for these components. By only altering these properties in your own CSS, you can change some of the looks of the components.

The available component classes in Feo.css are listed below.

{% set items = collections.all | subitems("blocks") %}
{% include "partials/sublist.njk" %}
