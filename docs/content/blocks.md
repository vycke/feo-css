---
title: What about CSS blocks?
category: Introduction
order: 5
---

With global styles (e.g. styles on `h1` tags), layout and utility classes, most of your styling problems will be solved. Those parts that are not yet solved can be solved with *blocks*. Compare it to the good old [BEM](http://getbem.com/introduction/). In modern frameworks they often corresponding one-on-one with UI components (e.g. a React component). 

> From the [CUBE CSS](https://cube.fyi/block.html) documentation: "A block is a skeletal component or organisational structure. To compare it to common user interface elements: it is a card element or a button element."

Blocks and child classes in blocks (e.g. `.card .image`) have a higher specificity compared to layout and utilities classes. Blocks will overwrite CSS properties. It is therefore advised to only apply styles not covered in utility classes, to avoid confusion. 

As blocks are your last resort, they tend to be very project/application/system specific. Due to this reason, and that they are often correlate with UI components, *Feo* does not facilitate any blocks classes. This allows you to define yourself which blocks you need and how far you will stretch with your utility classes.