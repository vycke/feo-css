---
title: Flexbox
category: Utilities
source: https://github.com/crinklesio/bace-css/blob/main/src/utilities/_flexbox.scss
---

## Direction

The following classes set `display: flex` and set the `flex-direction` based on the value in its name.

- `.flex-col` (column)
- `.flex-row`
- `.flex-col-reverse` (column-reverse)
- `.flex-row-reverse`

## Grow and shrink

- `.flex-grow`: sets `flex-grow: 1`. Allows elements to grow and take available space within a flexbox.
- `.flex-grow-0`: sets `flex-grow: 0`. Disallows elements to grow and take available space within a flexbox.
- `.flex-shrink`: sets `flex-shrink: 1`. Allows elements to shrink below its size when the flexbox shrinks.
- `.flex-shrink-0`: sets `flex-shrink: 0`. Disallows elements to shrink below its size when the flexbox shrinks.

## Wrap

- `.flex-wrap`: sets `flex-wrap: wrap`. This allows items exceeding the flexbox to go to a new line.
- `.flex-nowrap` sets `flex-wrap: nowrap`. Going to a new line is disallowed.

## Justify/align/place

- **Justify content**: defines how content aligns around the _main_ axis. Used with `.justify-<value>`.
- **Align content**: defines how _multi-line_ content aligns around the _main_ axis. Used with `.content-<value>`.
- **Align items**: defines how content aligns around the _cross_ axis. Used with `.items-<value>`.
- **Self align**: overwrites the default align items value set on the parent on individual elements within the Flexbox. Used with .self-<value>`.

All these classes follow the same pattern: `.<type>-<value>`. Note that not all values are available for all types.

- `.<type>-start` (flex-start)
- `.<type>-end` (flex-end)
- `.<type>-center`
- `.<type>-stretch`
- `.<type>-baseline`
- `.<type>-between` (space-between)
- `.<type>-around` (space-around)
- `.<type>-evenly` (space-evenly)

## Gap

The new gap property can be accessed by using the `flex-g-<name>`, where name is based on `$bace-sizes`.
