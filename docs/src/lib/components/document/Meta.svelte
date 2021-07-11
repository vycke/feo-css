<script>
	import { categories } from '$lib/constants';
	import Icon from '$lib/components/layout/Icon.svelte';

	export let doc;
	$: modifiedAt = new Date(doc.modifiedAt).toLocaleString();
</script>

<aside class="sticky post-0 p-1 flex-col mb-1 self-start">
	{#if doc.headers.length}
		<div class="mb-2 flex-col">
			<span class="monospace text-00 uppercase text-accent">Outline:</span>
			{#each doc.headers as header}
				<a class="header hover:text-accent" href="#{header.id}">» {header.label}</a>
			{/each}
		</div>
	{/if}

	<span class="monospace text-00 uppercase text-accent">Category:</span>
	<div class="flex-row items-center">
		<Icon
			class="text-gray-400"
			name={categories[doc.category] || 'circle'}
			attrs={{ height: 18 }}
		/>
		<span class="ml-00">{doc.category}</span>
	</div>

	{#if doc.source}
		<span class="monospace text-00 uppercase mt-1 text-accent">Source:</span>
		<div class="flex-row items-center">
			<Icon class="text-gray-400" name="github" attrs={{ height: 18 }} />
			<a class="ml-00" href={doc.source}>https://github.com</a>
		</div>
	{/if}
	<span class="monospace text-00 uppercase mt-1 text-accent">Last modified:</span>
	<div class="flex-row items-center">
		<Icon class="text-gray-400" name="calendar" attrs={{ height: 18 }} />
		<span class="capitalize ml-00">{modifiedAt}</span>
	</div>
</aside>
