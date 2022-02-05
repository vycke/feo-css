<script>
	import { categories } from '$lib/constants';
	import Icon from '$lib/components/layout/Icon.svelte';

	export let doc;
	$: modifiedAt = new Date(doc.modifiedAt).toLocaleString();
</script>

<aside class="sticky post-0 p-4 flex-col mb-4 self-start">
	{#if doc.headers.length}
		<div class="mb-6 stack stack-g-2">
			<span class="monospace text-2 uppercase text-accent">Outline:</span>
			{#each doc.headers as header}
				<a class="no-decoration header hover:text-accent" href="#{header.id}">{header.label}</a>
			{/each}
		</div>
	{/if}

	<span class="monospace text-2 uppercase text-accent">Category:</span>
	<div class="flex-row items-center">
		<Icon class="text-grey-2" name={categories[doc.category] || 'circle'} attrs={{ height: 18 }} />
		<span class="ml-2">{doc.category}</span>
	</div>

	{#if doc.source}
		<span class="monospace text-2 uppercase mt-4 text-accent">Source:</span>
		<div class="flex-row items-center">
			<Icon class="text-grey-2" name="github" attrs={{ height: 18 }} />
			<a class="ml-2" href={doc.source}>https://github.com</a>
		</div>
	{/if}
	<span class="monospace text-2 uppercase mt-4 text-accent">Last modified:</span>
	<div class="flex-row items-center">
		<Icon class="text-grey-2" name="calendar" attrs={{ height: 18 }} />
		<span class="capitalize ml-2">{modifiedAt}</span>
	</div>
</aside>
