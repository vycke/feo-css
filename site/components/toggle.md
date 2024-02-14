---
layout: base.njk
title: Toggle
key: components
subkey: toggle
---

A toggle is a specific component that can be used as a solitary
checkbox, or for something else.

## Example

<form>
  <label>
    <input type="checkbox" />
    My toggle
  </label>
</form>

## Implementation

```
<label>
  <input type="checkbox" ... />
  [label text]
</label>
```

## Custom properties

The implementation is a slightly different from the form elements,
as you will put the label text after the toggle in most cases. You can change these properties on the `input[type="checkbox"]` selector.

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
        <td><code>--toggle-checked-color</code></td>
        <td>
          Sets the background color of the toggle on
          <code>:checked</code>. Default is <code>green</code>.
        </td>
      </tr>
      <tr>
        <td><code>--toggle-dot-color</code></td>
        <td>
          Sets the dot color.
        </td>
      </tr>
      <tr>
        <td><code>--toggle-size</code></td>
        <td>
          Sets the size of the white "dot" of the toggle.
        </td>
      </tr>
      <tr>
        <td><code>--toggle-space</code></td>
        <td>
          Sets spacing around the white "dot" of the toggle.
        </td>
      </tr>
    </tbody>
  </table>
</div>

[_Back to components overview_](/components)
