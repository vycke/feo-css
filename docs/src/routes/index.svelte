<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/firstDoc.json');
		const doc = await res.json();
		return { props: { doc } };
	}
</script>

<script>
	import Article from '$lib/components/document/Article.svelte';
	import Meta from '$lib/components/document/Meta.svelte';
	import Page from '$lib/components/layout/Page.svelte';
	export let doc;
</script>

<Page title="{doc.category} > {doc.title}">
	<div class="sidebar-r sidebar-w-00 gap-1">
		<Article {doc} />
		<Meta {doc} />
	</div>
</Page>
