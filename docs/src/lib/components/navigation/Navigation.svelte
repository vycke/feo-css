<script>
	import { categories, name, source, version } from '$lib/constants';
	import { search, group } from '$lib/search';
	import Icon from '../layout/Icon.svelte';
	import NavItem from './NavItem.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
	import { page } from '$app/stores';

	// Properties
	export let docs;
	export let open = false;

	// Internal state
	let term = '';
	// Derived state
	$: icon = open ? 'x' : 'menu';
	$: filteredDocs = group(search(docs, term));
	$: path = $page.path === '' ? '/' : $page.path;
</script>

<nav class="px-1 pb-1 flex-col items-start bg-back text-front" data-open={open}>
	<div class="flex-row items-center w-full bg-back pt-1">
		<button
			class="text-front flex-grow text-left flex-row items-center bg-back"
			on:click={() => (open = !open)}
		>
			<Icon name={icon} />
		</button>
		<div class="flex-row items-center">
			<a href="/" class="name | no-decoration bold text-1 flex-row items-center">
				{name}
			</a>
			<a
				href={source}
				class="monospace lh-3 text-000 px-000 radius-000 border-hover border-w-1 ml-0"
			>
				v{version}
			</a>
		</div>
	</div>

	<ul role="list" class="pt-2 stack stack-g-000 w-full bg-back">
		<input bind:value={term} placeholder="Search..." class="mt-0 mb-2" />

		{#each Object.keys(filteredDocs) as category, i}
			<li class:mt-2={i > 0} class="cluster gap-00 items-center pb-000">
				<Icon name={categories[category] || 'circle'} class="text-accent" attrs={{ height: 20 }} />
				<span class="text-00 monospace uppercase text-accent">{category}</span>
			</li>

			{#each filteredDocs[category] as { title, slug, icon }, j}
				<NavItem
					{title}
					href="/{slug}"
					{icon}
					on:click={() => (open = false)}
					selected={(i === 0 && j === 0 && path === '/' && term === '') || path === `/${slug}`}
				/>
			{/each}
		{/each}

		<!-- <ThemeSwitch class={open ? 'mt-2' : 'stack-grow pt-2'} /> -->
		<li class="text-00 text-left py-1">
			Made with ♥️ by <a href="https://crinkles.io">Crinkles</a>
		</li>
	</ul>
</nav>

<style>
	li {
		border-bottom: 1px solid var(--color-hover);
	}

	nav {
		z-index: 100;
	}

	@media (min-width: 816px) {
		nav {
			max-height: calc(100vh - env(safe-area-inset-bottom));
			overflow-y: auto;
			position: sticky;
			top: 0;
		}

		button {
			display: none;
		}
	}

	@media (max-width: 816px) {
		nav {
			border-bottom: 1px solid var(--color-hover);
		}

		nav[data-open='false'] ul {
			display: none;
		}

		nav[data-open='true'] ul {
			display: block;
		}
	}
</style>
