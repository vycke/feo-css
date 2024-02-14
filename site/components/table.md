---
layout: base.njk
title: Table
key: components
subkey: table
---

Generic table component.

## Example

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

## Implementation

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

<details open style="--accordion-bg: indianred; --accordion-border: indianred;">
  <summary>About the wrapping div</summary>
  <div>the additional <code>div</code> wrapping the <code>table</code> in the below implementation is required if you want the table to horizontal scroll on smaller screens. The <code>table</code> needs to be the <code>:only-child</code> of this div.</div>
</details>

## Custom properties

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

[_Back to components overview_](/components)
