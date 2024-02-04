---
layout: base.njk
title: Utilities classes
key: utilities
---

There is nothing wrong with utility-first CSS. It only becomes a
problem when it is _utility-only_. If you looked at the
[layouts layer](/layouts), utilities there are used
to control layout settings. It is an incredible scalable setup.

Feo.css offers a very limited set of utility classes, mostly based
on the available [design tokens](/tokens). In all
the classes that you see, the `<z>` is a
placeholder for the number corresponding to the correct design
token.

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
        <td><code>m-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
        <td><code>margin</code></td>
      </tr>
      <tr>
        <td><code>mt-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
        <td><code>margin-top</code></td>
      </tr>
      <tr>
        <td><code>mr-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
        <td><code>margin-right</code></td>
      </tr>
      <tr>
        <td><code>mb-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
        <td><code>margin-bottom</code></td>
      </tr>
      <tr>
        <td><code>ml-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
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
        <td><code>p-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
        <td><code>padding</code></td>
      </tr>
      <tr>
        <td><code>pt-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
        <td><code>padding-top</code></td>
      </tr>
      <tr>
        <td><code>pr-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
        <td><code>padding-right</code></td>
      </tr>
      <tr>
        <td><code>pb-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
        <td><code>padding-bottom</code></td>
      </tr>
      <tr>
        <td><code>pl-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
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
        <td><code>size-&lt;z&gt;</code></td>
        <td><code>--token-size-&lt;z&gt;</code></td>
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

## `maxw-<z>`

Based on the `--token-bp-<z>` [tokens](/tokens), control the `max-width` property.

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
