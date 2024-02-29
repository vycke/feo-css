---
layout: base.njk
title: Tooltip
key: components
subkey: tooltip
---

A simple `data-*` attribute that allows for a hover-triggered tooltip with plain text in it.

#### Example

Hover <span data-tooltip="very long text that is needed to see what it does if there is more lines to cover">me</span> for a tooltip at the top!

Hover <span data-tooltip="very long text that is needed to see what it does if there is more lines to cover" data-tooltip-bottom>me</span> for a tooltip at the bottom!

#### Implementation

```
<span data-tooltip="text goes here">
  hover element
</span>
```

By default the tooltip is positioned at the top. If you want it at the bottom, add `data-tooltip-bottom` to the element.

#### Custom properties

There are several custom properties available that can be overwritten to control the looks of the tooltip.

<div>
  <table>
    <thead>
      <tr>
        <th>Custom property</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--tooltip-surface</code></td>
        <td>
          Sets the <code>background-color</code> property.
        </td>
      </tr>
      <tr>
        <td><code>--tooltip-color</code></td>
        <td>
          Sets <code>color</code> property of the text. 
        </td>
      </tr>
      <tr>
        <td><code>--tooltip-decoration</code></td>
        <td>
          Sets <code>text-decoration</code> on the hover element. 
        </td>
      </tr>
    </tbody>
  </table>
</div>

[_Back to components overview_](/components)
