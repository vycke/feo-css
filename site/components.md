---
layout: base.njk
title: Components
key: components
---

A limited set of components (mostly based on basic HTML elements,
but are more complex in their implementation).

## Component APIs

Several of the below components have an "API". These are defined CSS custom properties specified for these components. By only altering these properties in your own CSS, you can change some of the looks of the components.

## Tables

<div>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Length (m)</th>
        <th>Weight (kg)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>1.72</td>
        <td>68</td>
      </tr>
      <tr>
        <td>John Doe</td>
        <td>1.72</td>
        <td>68</td>
      </tr>
      <tr>
        <td>John Doe</td>
        <td>1.72</td>
        <td>68</td>
      </tr>
    </tbody>
  </table>
</div>

**Note:** the additional `div` wrapping the `table` in the below implementation is required if you want the table to horizontal scroll on smaller screens. The `table` needs to be the `:only-child` of this div.

```
<div>
  <table>
    <thead>
      <tr><th>...</th></tr>
    </thead>
    <tbody>
      <tr><td>...</td></tr>
    </tbody>
  </table>
</div>
```

There are several custom properties available that can be
overwritten to control the looks of the table. You can change these properties on the `table` selector.

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
        <td><code>--table-radius</code></td>
        <td>Sets the radius of the corners</td>
      </tr>
      <tr>
        <td><code>--table-color</code></td>
        <td>Sets the color of the borders and header</td>
      </tr>
    </tbody>
  </table>
</div>

## Forms

Consistent styling is available for the most common form elements:
input fields, text-areas, and two kinds of dropdowns. In addition,
various states like `:hover` and `:disabled` are covered.

<form class="flex-col --gap-0 maxw-1">
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

All the fields in the form follow a specific implementation for
the styling.

```
<label>
  [label text]
  <[element] ... />
</label>
```

## Toggle

A toggle is a specific component that can be used as a solitary
checkbox, or for something else.

<form>
  <label>
    <input type="checkbox" />
    My toggle
  </label>
</form>

The implementation is a slightly different from the form elements,
as you will put the label text after the toggle in most cases.

```
<label>
  <input type="checkbox" ... />
  [label text]
</label>
```

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
