---
layout: base.njk
title: Tokens
order: 2
key: tokens
---

Feo.css offers a limited set of design tokens, implemented in [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) (`--*`). These design tokens are used throughout all the different layers of Feo.css. For example, several layout
patterns allow you to set the `gap` between columns and rows, through _class ulilities_. These classes directly use the defined tokens.

<details>
  <summary>Naming convention</summary>
  <p>Tokens like sizing and breakpoints are considered to have a "baseline". The most common value for the design token. Those
  tokens always have a <code>-0</code> as the post-fix. In the sequence of tokens, if you want to go up a value, you increase the value.
  If you want to go down a value, you decrease the value, or add a 0 (e.g. <code>-00</code>).</p>
</details>

## Sizing

Feo.css offers design tokens on _sizing_ that can be used for spacing (e.g. margin and padding), font-sizes, or anything you can think of. The values are based on a combination of a few key principles:

- [Fluid scaling](https://crinkles.dev/writing/different-approaches-to-fluid-typography-and-layouts/) based on screen size.
- A ratio of `1.33` between two consecutive token values.
- The mentioned naming convention outlined above. `1rem` is taken as the base value (`--size-0`).

<details>
  <summary>Note on fluid scaling</summary>
  <p>If you do not want to use a fluid scaling of the <code>--size-{z}</code> tokens, you can overwrite the <code>--feo-scale</code> Custom Property in your own code, and set it to <code>0</code>.</p>
</details>

<div>
  <table>
    <thead>
      <tr>
        <th>Token name</th>
        <th>Value at 320px</th>
        <th>Value at 1240px</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--token-size-000</code></td>
        <td>0.65rem</td>
        <td>0.65rem + 3.25px</td>
      </tr>
      <tr>
        <td><code>--token-size-00</code></td>
        <td>0.8125rem</td>
        <td>0.8125rem + 4px</td>
      </tr>
      <tr>
        <td><code>--token-size-0</code></td>
        <td>1rem</td>
        <td>1rem + 5px</td>
      </tr>
      <tr>
        <td><code>--token-size-1</code></td>
        <td>1.33rem</td>
        <td>1.33rem + 6.65px</td>
      </tr>
      <tr>
        <td><code>--token-size-2</code></td>
        <td>1.78rem</td>
        <td>1.78rem + 8.9px</td>
      </tr>
      <tr>
        <td><code>--token-size-3</code></td>
        <td>2.37rem</td>
        <td>2.37rem + 11.85px</td>
      </tr>
      <tr>
        <td><code>--token-size-4</code></td>
        <td>3.16rem</td>
        <td>3.16rem + 15.7px</td>
      </tr>
      <tr>
        <td><code>--token-size-5</code></td>
        <td>4.21rem</td>
        <td>4.21rem + 21.05px</td>
      </tr>
    </tbody>
  </table>
</div>

## Breakpoints

Tokens used as points that can be used, whenever your UI is
breaking. Scaling between the values is based on
`1.33`.

<div>
  <table>
    <thead>
      <tr>
        <th>Token name</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--token-bp-000</code></td>
        <td>11.31rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-00</code></td>
        <td>15.04rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-0</code></td>
        <td>20rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-1</code></td>
        <td>20rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-2</code></td>
        <td>26.6rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-3</code></td>
        <td>35.38rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-4</code></td>
        <td>47.05rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-5</code></td>
        <td>62.58rem</td>
      </tr>
    </tbody>
  </table>
</div>

## Colors

A set of dark and light colors are present in Feo.css, that can be
used as a base for your application in greyscale.

<div>
  <table>
    <thead>
      <tr>
        <th>Token name</th>
        <th>RGB value</th>
        <th>HSL value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--token-neutral-0</code></td>
        <td>#0E131B</td>
        <td><code>hsl(215, 30%, 8%)</code></td>
      </tr>
      <tr>
        <td><code>--token-neutral-1</code></td>
        <td>#2B3A50</td>
        <td><code>hsl(215, 30%, 24%)</code></td>
      </tr>
      <tr>
        <td><code>--token-neutral-2</code></td>
        <td>#476185</td>
        <td><code>hsl(215, 30%, 40%)</code></td>
      </tr>
      <tr>
        <td><code>--token-neutral-3</code></td>
        <td>#C8D4E5</td>
        <td><code>hsl(215, 36%, 78%)</code></td>
      </tr>
      <tr>
        <td><code>--token-neutral-4</code></td>
        <td>#E3E9F2</td>
        <td><code>hsl(215, 36%, 92%)</code></td>
      </tr>
      <tr>
        <td><code>--token-neutral-5</code></td>
        <td>#F7F9FB</td>
        <td><code>hsl(215, 36%, 98%)</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Themes

Feo.css does not offer multiple themes out of the box, but offers a basic _light_, as shown below. The tokens defined in the light theme are used throughout Feo.css (e.g. forms-component). Feo.css does not offer auto-themes out of the box, as these should be _opt-in_ for developers. By offering one theme, consistent application of theme related tokens (through custom properties) can be achieved.

<div>
  <table>
    <thead>
      <tr>
        <th>Color</th>
        <th>Design token</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--surface-0</code></td>
        <td><code>--token-neutral-0</code></td>
        <td>Main background color</td>
      </tr>
      <tr>
        <td><code>--surface-1</code></td>
        <td><code>--token-neutral-1</code></td>
        <td>Background color for surfaces that need to stand out a little on the main background (e.g. cards, code-blocks)</td>
      </tr>
      <tr>
        <td><code>--surface-2</code></td>
        <td><code>--token-neutral-2</code></td>
        <td>Surface color for specific elements or properties that need a little more emphasize (e.g. border colors)</td>
      </tr>
      <tr>
        <td><code>--text-0</code></td>
        <td><code>--token-neutral-5</code></td>
        <td>Main text color</td>
      </tr>
      <tr>
        <td><code>--text-1</code></td>
        <td><code>--token-neutral-4</code></td>
        <td>Text color for elements that need a little less high-light</td>
      </tr>
      <tr>
        <td><code>--text-2</code></td>
        <td><code>--token-neutral-3</code></td>
        <td>Text color for elements with less emphasize</td>
      </tr>
    </tbody>
  </table>
</div>

<details>
  <summary>About contrasts</summary>
  <p>The selected theme colors, if combined with <code>--surface-{z}</code> and <code>--text-{z}</code> have a contrast score of AAA (> 7) and can be used freely. Except when you combine <code>--surface-2</code> and <code>--text-2</code>. That combination has a AA+ (4.25) score. So it should only be used with larger text.</p>
</details>
