<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`/api/${page.params.slug}.json`);
		if (res.ok) {
			const doc = await res.json();
			return { props: { doc } };
		}

		return {
			status: res.status,
			error: new Error(`Could not find document '${page.params.slug}'`)
		};
	}
</script>

<script>
	import Article from '$lib/components/document/Article.svelte';
	import Meta from '$lib/components/document/Meta.svelte';
	import Page from '$lib/components/layout/Page.svelte';
	export let doc;
</script>

<Page title="{doc.category} > {doc.title}">
	<div class="panel-r panel-f-00 panel-w-3 panel-g-1">
		<Article {doc} />
		<Meta {doc} />
	</div>
</Page>
