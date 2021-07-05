<script>
	import { description } from '$lib/constants';

	// Properties
	let klass = '';
	export { klass as class };
	export let title = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:title" content={title} />
	<meta property="og:title" content={title} />

	<meta name="description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:description" content={description} />
</svelte:head>

<main class="center center-g-1 center-w-4 text-front {klass}">
	<h1 class="my-1">{title}</h1>
	<slot />
</main>
