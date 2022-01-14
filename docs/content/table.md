---
title: Responsive table
category: Layout
source: https://github.com/kevtiq/bace-css/blob/main/src/layout/_tables.scss
---

The `.responsive-table` class creates a side scrollable table, ideal for responsive layouts. By default, table head (`<thead>`) is fixed. When there is a vertical overflow, and you are scrolling up or down, the table head remains visible. The `.table-fixed-column` allows the save behavior for the first column.

```html
<table>
	<thead>
		<tr>
			<th />
			<th>Col Header</th>
			<th>Col Header</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Row Header</th>
			<td>Cell Data</td>
			<td>Cell Data</td>
		</tr>
	</tbody>
</table>
```

> The first `<th />` in the `thead`, and the `th` in the `tbody` are only required when working with the `.table-fixed-column` class.
