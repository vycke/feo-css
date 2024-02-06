---
layout: base.njk
title: Layout patterns
key: layouts
---

Feo.css offers classes for standardized layout patterns that you see on almost every website or application.

<details>
  <summary>Class utilities</summary>
  <p><a href="/utilities">Utility classes</a> are classes that do one thing, and one thing well. 
    Class utilities are classes that that allow you to control one aspect from a different CSS class, like a layout class. Class utilities have a post-fix of <code>--*</code> to make them easily spottable. Most of the class utilities are based on <a href="/tokens">the design tokens</a>.</p>
</details>

## Center

#### Implementation

```
<div class="center --width-{z}">
  ...
</div>
```

#### Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--width-{z}</code></td><td>Required</td><td>Controls the max-width of the centered element</td></tr>
    </tbody>
  </table>
</div>

## Cluster

#### Implementation

```
<div class="cluster">
  ...
</div>
```

#### Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td>Controls the gap between the child elements</td></tr>
    </tbody>
  </table>
</div>

## Sidebar

<details>
  <summary>Tip!</summary>
  <p>When combining the <code>switcher</code> and <code>sidebar</code> classes, you can get a long way into implementing a responsive sidebar(-ish). This very site combines the two! All you need to do is set the <code>sidebar</code> on the parent, and on the element that is actually the sidebar, you set <code>switcher</code>. For the <code>--width-{z}</code> utility class on both elements, just ensure the element with <code>switcher</code> as a <code>z+1</code>, compared to the parent element.</p>
</details>

#### Implementation

```
<div class="sidebar --left --width-{z}">
  ...
</div>
```

#### Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th></th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the gap between the child elements</td></tr>
      <tr><td><code>--width-{z}</code></td><td>Required</td><td>Sets the fixed width of the "sidebar"</td></tr>
      <tr><td><code>--left/right</code></td><td>Required</td><td>Sets if the left or right element is the fixed "sidebar"</td></tr>
    </tbody>
  </table>
</div>

## Switcher

#### Implementation

```
<div class="switcher --width-{z}">
  ...
</div>
```

#### Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th></th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the gap between the child elements</td></tr>
      <tr><td><code>--width-{z}</code></td><td>Required</td><td>Sets the breakpoint for the parent when it switches from horizontal to vertical orientation</td></tr>
    </tbody>
  </table>
</div>

## Tiles

#### Implementation

```
<div class="tiles --width-{z}">
  ...
</div>
```

#### Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th></th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the gap between the child elements</td></tr>
      <tr><td><code>--width-{z}</code></td><td>Required</td><td>Sets the min-width for each individual element</td></tr>
    </tbody>
  </table>
</div>

## Equal column grid

#### Implementation

```
<div class="grid">
  ...
</div>
```

#### Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td>0</td><td>Controls the gap between the child elements</td></tr>
      <tr><td><code>--amount-{z}</code></td><td>2</td><td>Sets the amount of columns for the grid</td></tr>
    </tbody>
  </table>
</div>

## Flexbox

<div>
  <table>
    <thead><tr><th>Class name</th><th>Description</th></tr></thead>
    <tbody>
      <tr>
        <td><code>flex-col/row</code></td>
        <td>Sets the element to flex vertically/horizontally</td>
      </tr>
      <tr>
        <td><code>flex-row</code></td>
        <td>Sets the element to flex horizontally</td>
      </tr>
      <tr>
        <td><code>...</code></td>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
