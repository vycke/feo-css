<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch('/api/docsOverview.json');
		const docs = await res.json();
		return { props: { path: page.path, docs } };
	}
</script>

<script>
	import '../styles/index.scss';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import { theme } from '$lib/store';
	import { onMount } from 'svelte';

	export let path = '';
	export let docs;

	onMount(() => {
		let _theme = 'dark';
		if (!'theme' in localStorage) {
			_theme = localStorage.getItem('theme');
			document.documentElement.dataset.theme = _theme;
		} else if (window.matchMedia('(prefers-color-scheme: light)').matches) _theme = 'light';
		theme.update(() => _theme);
	});
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme} />
</svelte:head>

<div class="bg-back panel-l panel-s-0 panel-w-3">
	<Navigation {path} {docs} />
	<slot />
</div>
