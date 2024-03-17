---
layout: base.njk
title: Sidebar
key: layouts
subkey: sidebar
---

A common responsive layout in which there is a "sidebar" of a _fixed_ width, and a content area that is flexible. This implementation switches to a vertical layout the moment the flexible content gets too little space left within the _targeted (wrapper) element_. By default, items are stretch vertically within the parent wrapper.

{% include "svg/sidebar.svg" %}

## Implementation

```
<div class="sidebar --left --threshold-{z}">
  ...
</div>
```

<details>
  <summary>Implementation tip(s)!</summary>
  <p><b>1.</b> The sidebar layout pattern does not have to be applied to an entire page. You can even apply it to a "searchbar". The input bar is the flexible content, but the search button is of a fixed content. If there is not enough room, they switch to a vertical layout.</p>
  <p><b>2.</b> There is a custom property called <code>--layout-inline-size</code>, set to 60% to calculate the breaking point of this layout. If you want a different breaking point, you can overwrite this custom property. There are <i>class utilities</i> available.</p>
</details>

## API

<div>
  <table>
    <thead>
      <tr><th>Custom property</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--layout-threshold</code></td><td><code>0</code></td><td>Sets the "fixed width" of the sidebar child element</tr>
      <tr><td><code>--layout-gap</code></td><td><code>0</code></td><td>Sets the <code>gap</code> of the targeted element</tr>
      <tr><td><code>--layout-inline-size</code></td><td><code>60%</code></td><td>Sets the <code>min-width</code> of the flexible content child element</tr>
    </tbody>
  </table>
</div>

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th></th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the gap between the child elements</td></tr>
      <tr><td><code>--threshold-{z}</code></td><td>Required</td><td>Sets the fixed width of the "sidebar"</td></tr>
      <tr><td><code>--left/right</code></td><td>Required</td><td>Sets if the left or right element is the fixed "sidebar"</td></tr>
    </tbody>
  </table>
</div>
