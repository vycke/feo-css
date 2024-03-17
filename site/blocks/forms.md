---
layout: base.njk
title: Forms
key: blocks
subkey: forms
---

Generic form fields useful for all forms.

## Example

<form class="flex --column --gap-0 maxw-1">
  <label>
    <span>Input field</span>
    <input placeholder="placeholder" />
  </label>
  <label>
    <span>Disabled field</span>
    <input placeholder="placeholder" disabled />
  </label>
  <label>
    <span>Dropdown (<code>select</code>)</span>
    <select>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
  </label>
  <label>
    <span>Typeable dropdown (<code>input[list]</code>)</span>
    <input list="options" placeholder="Type or click" />
    <datalist id="options">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </datalist>
  </label>
  <label>
    My text-area
    <textarea placeholder="placeholder"></textarea>
  </label>
</form>

Consistent styling is available for the most common form elements:
input fields, text-areas, and two kinds of dropdowns. In addition,
various states like `:hover` and `:disabled` are covered.

## Implementation

All the fields in the form follow a specific implementation for
the styling.

```
<label>
  [label text]
  <[element] ... />
</label>
```

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
        <td><code>--form-radius</code></td>
        <td>
          Sets the <code>border-radius</code> of the fields.
        </td>
      </tr>
      <tr>
        <td><code>--form-border</code></td>
        <td>
          Sets the <code>border-color</code> of the fields.
        </td>
      </tr>
      <tr>
        <td><code>--form-focus</code></td>
        <td>
          Sets the <code>border-radius</code> of the fields, on hover and focus.
        </td>
      </tr>
      <tr>
        <td><code>--form-disabled-surface</code></td>
        <td>
          Sets the <code>background-color</code> of disabled fields.
        </td>
      </tr>
      <tr>
        <td><code>--form-disabled-border</code></td>
        <td>
          Sets the <code>border-color</code> of disabled fields.
        </td>
      </tr>
      <tr>
        <td><code>--form-disabled-padding</code></td>
        <td>
          Sets the <code>padding-left</code> of disabled fields.
        </td>
      </tr>
    </tbody>
  </table>
</div>
