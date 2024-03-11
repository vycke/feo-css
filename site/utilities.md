---
layout: base.njk
title: Utilities classes
order: 5
key: utilities
---

Utility classes are classes that do one thing, and one thing well. They are different _class utilities_, like the one used in
[layouts layer](/layouts).

**Note:** Feo.css offers a very limited set of utility classes. The expectation is that most design tokens will not remain, especially colors. Therefor, only common utility classes unrelated to design tokens are given, and a limited set of utility classes based on the `--token-size-{z}` and `--token-bp-{z}` tokens.

## Margins

<div>
  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th><a href="tokens.html">Design token</a></th>
        <th>CSS property</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>m-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>margin</code></td>
      </tr>
      <tr>
        <td><code>mt-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>margin-top</code></td>
      </tr>
      <tr>
        <td><code>mr-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>margin-right</code></td>
      </tr>
      <tr>
        <td><code>mb-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>margin-bottom</code></td>
      </tr>
      <tr>
        <td><code>ml-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>margin-left</code></td>
      </tr>
    </tbody>
  </table>
</div>

<details>
  <summary>Were is my padding?!</summary>
  <p>You might be wondering, where are the padding classes? Well Feo.css is a little opinionated. The layers are build with 'layout' being the most important layer. Layout is about how elements are positioned in relation to eachother. Margin has an impact on that, padding, does not. If you want padding, copy over the <code>src/utilities/margin.css</code> and replace <code>margin</code> with <code>padding</code>.</p>
</details>

## Typography

<div>
  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th><a href="tokens.html">Design token</a></th>
        <th>CSS property</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>size-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>font-size</code></td>
      </tr>
      <tr>
        <td><code>bold/regular/italic</code></td>
        <td>-</td>
        <td>Various</td>
      </tr>
    </tbody>
  </table>
</div>

## `.maxw-{z}`

Based on the `--token-bp-{z}` [tokens](/tokens), control the `max-width` property.

## `.click-area`

Makes the entire element with this class clickable, based on the
first `<a />` it can find in its (sub-)DOM. It does not
have to be a direct descender.

## `.hover-group`

Makes an entire group more interactive on hover, by making the non-hover times dissappear a bit (lowering their opacity). For an example, look at the navigation of this document website (on desktop).

## `.visually-hidden`

Makes the element visually hidden for users, but accessible for screen-readers, etc.

## `.indexed`

Sets a `--index` property on the direct children, corresponding to the index of the child. Can be used for internal calculations based on this number. Up to `10` are faciliated.

## `.counted`

Sets a `--count` on the element with the value of the number of direct children the element has. Up to `10` is facilitated.
