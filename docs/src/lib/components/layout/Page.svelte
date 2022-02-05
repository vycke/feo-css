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

<main class="center center-g-4 center-w-7 text-front {klass} mt-4">
	<h1 class="lh-5">{title}</h1>
	<slot />
</main>
