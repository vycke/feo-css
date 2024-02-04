---
layout: base.njk
title: Design tokens
key: tokens
---

Feo.css offers a limited set of design tokens, implemented in [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) (`--*`). These design tokens are used throughout all the different layers of Feo.css. For example, several layout
patterns allow you to set the `gap` between columns and rows, through _class ulilities_. These classes directly use the defined tokens.

## Naming convention

Tokens like sizing and breakpoints are considered to have a
"baseline". The most common value for the design token. Those
tokens always have a `-0` as the post-fix. In the
sequence of tokens, if you want to go up a value, you increase the
value. If you want to go down a value, you decrease the value, or
add a 0 (e.g. `-00`).

## Sizing

The sizing tokens are based on a [fluid](https://vyckes.dev/writing/different-approaches-to-fluid-typography-and-layouts/)
scale (larger screens mean larger values). In addition, the
majority of them are scaled with a value of `1.33` to
the previous token.

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
        <td><code>--token-size-0000</code></td>
        <td>0.5rem</td>
        <td>0.5rem + 2.5px</td>
      </tr>
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
        <td><code>--token-color-light-0</code></td>
        <td>#F7F9FB</td>
        <td><code>hsl(215, 36%, 98%)</code></td>
      </tr>
      <tr>
        <td><code>--token-color-light-1</code></td>
        <td>#E3E9F2</td>
        <td><code>hsl(215, 36%, 92%)</code></td>
      </tr>
      <tr>
        <td><code>--token-color-light-2</code></td>
        <td>#C8D4E5</td>
        <td><code>hsl(215, 36%, 78%)</code></td>
      </tr>
      <tr>
        <td><code>--token-color-dark-0</code></td>
        <td>#0E131B</td>
        <td><code>hsl(215, 30%, 8%)</code></td>
      </tr>
      <tr>
        <td><code>--token-color-dark-1</code></td>
        <td>#2B3A50</td>
        <td><code>hsl(215, 30%, 24%)</code></td>
      </tr>
      <tr>
        <td><code>--token-color-dark-2</code></td>
        <td>#476185</td>
        <td><code>hsl(215, 30%, 40%)</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Light & dark theme

A simple light & dark theme is constructed, that is automatically
selected based on the user device preferences. The theme colors
are picked from the light/dark color tokens.

<div>
  <table>
    <thead>
      <tr>
        <th>Token name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--color-surface-0</code></td>
        <td>The main background of the page</td>
      </tr>
      <tr>
        <td><code>--color-surface-1</code></td>
        <td>
          A secondary color that can be used on different surfaces,
          such as tables, cards, etc.
        </td>
      </tr>
      <tr>
        <td><code>--color-surface-2</code></td>
        <td>
          A tertiary color should be only used in smaller elements
          where the background needs a bit more contrast (e.g.
          switch)
        </td>
      </tr>
      <tr>
        <td><code>--color-foreground-0</code></td>
        <td>
          The color of primary elements, such as text, to create the
          biggest contrast with the background.
        </td>
      </tr>
      <tr>
        <td><code>--color-foreground-1</code></td>
        <td>
          A softer foreground color with a little less contract. Can
          be used for less important text, borders, etc.
        </td>
      </tr>
      <tr>
        <td><code>--color-link</code></td>
        <td>The color of unstyled links.</td>
      </tr>
    </tbody>
  </table>
</div>
