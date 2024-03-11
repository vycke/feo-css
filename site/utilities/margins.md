---
layout: base.njk
title: Margins
key: utilities
subkey: margins
---

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
