---
layout: base.njk
title: Accordion
key: blocks
subkey: accordion
---

An accordion or alert box that can be styled and used to provide more information to users.

## Example

<details>
  <summary>Accordion title</summary>
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor mauris et nisl lobortis, nec efficitur lectus placerat. Nunc ultricies libero quis justo feugiat, at dapibus ex egestas. Donec cursus euismod mauris, ut pellentesque est scelerisque quis. Vestibulum pellentesque dui ut congue tempor. Morbi sit amet elit nec sapien auctor fringilla. </div>
</details>

## Implementation

```
<details>
  <summary>Title</summary>
  <div>...</div>
</details>
```

<details open style="--accordion-bg: indianred; --accordion-border: indianred;">
  <summary>About the wrapping div</summary>
  <div>You should wrap the content that doess <i>not</i> to the header/summary, in an HTML tag (e.g. <code>p</code>, <code>div</code>) for the opening animation to work.</div>
</details>

## Custom properties

There are several custom properties available that can be
overwritten to control the looks of the table. You can change these properties on the `details` selector.

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
        <td><code>--accordion-border</code></td>
        <td>
          Sets the <code>border-color</code> property.
        </td>
      </tr>
      <tr>
        <td><code>--accordion-surface</code></td>
        <td>
          Sets <code>background-color</code> property of the header (also known as the <code>summary</code>). 
        </td>
      </tr>
      <tr>
        <td><code>--accordion-radius</code></td>
        <td>
          Sets <code>border-radius</code> property. 
        </td>
      </tr>
    </tbody>
  </table>
</div>
