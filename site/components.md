---
layout: base.njk
title: Components
key: components
---

A limited set of components (mostly based on basic HTML elements,
but are more complex in their implementation).

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

This is how You implement it. **Note:** the
additional `div` is required to ensure the table is
sidescrollable and does not break layouts on small screens. Feo.css is built in such a way to determine automatically if the `first-child` of the `div` is the table, using the `:has` selector.

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
overwritten to control the looks of the table.

<div>
  <table>
    <thead>
      <tr>
        <th>Custom property</th>
        <th>Selector</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--table-radius</code></td>
        <td><code>table</code></td>
        <td>Sets the radius of the corners</td>
      </tr>
      <tr>
        <td><code>--table-color</code></td>
        <td><code>table</code></td>
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

## Switch

A switch is a specific component that can be used as a solitary
checkbox, or for something else.

<form>
  <label>
    <input type="checkbox" />
    My Switch
  </label>
</form>

The implementation is a slightly different from the form elements,
as you will put the label text after the switch in most cases.

```
<label>
  <input type="checkbox" ... />
  [label text]
</label>
```

The implementation is a slightly different from the form elements,
as you will put the label text after the switch in most cases.

<div>
  <table>
    <thead>
      <tr>
        <th>Custom property</th>
        <th>Selector</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--switch-color</code></td>
        <td><code>input[type="checkbox"]</code></td>
        <td>
          Sets the background color of the switch on
          <code>:checked</code>. Default is <code>green</code>.
        </td>
      </tr>
    </tbody>
  </table>
</div>
