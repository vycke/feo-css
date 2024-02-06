---
layout: base.njk
title: Utilities classes
key: utilities
---

Utility classes are classes that do one thing, and one thing well. They are different _class utilities_, like the one used in
[layouts layer](/layouts).

<details>
  <summary>Naming convention</summary>
  <p>Feo.css offers a very limited set of utility classes, mostly based
  on the available <a href="/tokens">design tokens</a>. In all
  he classes that you see, the <code>{z}</code> is a
  placeholder for the number corresponding to the correct design
  token.</p>
</details>

## Margin

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

## Padding

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
        <td><code>p-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>padding</code></td>
      </tr>
      <tr>
        <td><code>pt-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>padding-top</code></td>
      </tr>
      <tr>
        <td><code>pr-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>padding-right</code></td>
      </tr>
      <tr>
        <td><code>pb-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>padding-bottom</code></td>
      </tr>
      <tr>
        <td><code>pl-{z}</code></td>
        <td><code>--token-size-{z}</code></td>
        <td><code>padding-left</code></td>
      </tr>
    </tbody>
  </table>
</div>

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
        <td><code>monospace/serif/sans-serif</code></td>
        <td>-</td>
        <td><code>font-family</code></td>
      </tr>
      <tr>
        <td><code>bold/regular/italc/uppercase</code></td>
        <td>-</td>
        <td>Various</td>
      </tr>
      <tr>
        <td><code>text-left/right/center</code></td>
        <td>-</td>
        <td><code>text-align</code></td>
      </tr>
      <tr>
        <td><code>lh-1</code></td>
        <td>-</td>
        <td><code>line-height: 1</code></td>
      </tr>
    </tbody>
  </table>
</div>

## `maxw-{z}`

Based on the `--token-bp-{z}` [tokens](/tokens), control the `max-width` property.

## `click-area`

Makes the entire element with this class clickable, based on the
first `<a />` it can find in its (sub-)DOM. It does not
have to be a direct descender.

## Position

<div>
  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>relative</code></td>
        <td>Sets the position property</td>
      </tr>
      <tr>
        <td><code>absolute</code></td>
        <td>Sets the position property</td>
      </tr>
      <tr>
        <td><code>sticky</code></td>
        <td>
          Sets the position property. In addition sets
          <code>top: 0</code>.
        </td>
      </tr>
    </tbody>
  </table>
</div>
