---
layout: base.njk
title: Sidebar
key: layouts
subkey: sidebar
---

[_Back to layouts overview_](/layouts)

A common responsive layout in which there is a "sidebar" of a _fixed_ width, and a content area that is flexible. This implementation switches to a vertical layout the moment the flexible content gets too little space left within the _targeted (wrapper) element_.

{% include "svg/sidebar.njk" %}

## Implementation

```
<div class="sidebar --left --width-{z}">
  ...
</div>
```

<details>
  <summary>Implementation tip(s)!</summary>
  <p><b>1.</b> The sidebar layout pattern does not have to be applied to an entire page. You can even apply it to a "searchbar". The input bar is the flexible content, but the search button is of a fixed content. If there is not enough room, they switch to a vertical layout.</p>
  <p><b>2.</b> There is a custom property called <code>--layout-inline-size</code>, set to 67% to calculate the breaking point of this layout. If you want a different breaking point, you can overwrite this custom property. There are <i>class utilities</i> available.</p>
</details>

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th></th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the gap between the child elements</td></tr>
      <tr><td><code>--width-{z}</code></td><td>Required</td><td>Sets the fixed width of the "sidebar"</td></tr>
      <tr><td><code>--left/right</code></td><td>Required</td><td>Sets if the left or right element is the fixed "sidebar"</td></tr>
    </tbody>
  </table>
</div>
