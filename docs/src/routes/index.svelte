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
	<div class="panel-r panel-s-00 panel-w-3 panel-g-1">
		<Article {doc} />
		<Meta {doc} />
	</div>
</Page>
