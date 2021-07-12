<script>
	import { createEventDispatcher } from 'svelte';
	import { categories, name, source, version } from '$lib/constants';
	import { search, group } from '$lib/search';
	import Icon from '../layout/Icon.svelte';
	import NavItem from './NavItem.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
	import { page } from '$app/stores';

	const dispatch = createEventDispatcher();
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

<nav class="sticky post-0 p-1 flex-col items-start bg-back text-front" data-open={open}>
	<div class="flex-row items-center full-width">
		<button
			class="text-front flex-grow text-left flex-row items-center"
			on:click={() => dispatch('toggle')}
		>
			<Icon name={icon} />
		</button>
		<div class="flex-row items-center">
			<a href="/" class="name | no-underline bold text-1 flex-row items-center">
				<svg
					width="26"
					height="31"
					viewBox="0 0 26 31"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M18.2163 1.05096C16.1536 -0.350321 13.4531 -0.350318 11.3904 1.05096L3.17445 6.63234C1.33478 7.64567 0 9.59224 0 12.0274V19.2181C0 21.7593 1.56921 23.9313 3.78469 24.8043C3.83444 24.8239 3.88223 24.8485 3.92651 24.8786L11.3904 29.949C13.4531 31.3503 16.1536 31.3503 18.2163 29.949L23.3046 26.4924C26.8933 24.0545 26.8934 18.7326 23.3047 16.2947L22.9756 16.0712C22.5736 15.7981 22.5736 15.2019 22.9756 14.9288L23.3123 14.7001C26.905 12.2595 26.8894 6.94284 23.3047 4.50763L18.2163 1.05096ZM11.9037 17.4462C11.9037 17.9981 12.5157 18.3259 12.9699 18.0174L15.8347 16.0712C16.2367 15.7981 16.2367 15.2019 15.8347 14.9288L12.9699 12.9826C12.5157 12.6741 11.9037 13.0019 11.9037 13.5538V17.4462ZM3.05224 12.1458V18.9408C3.05224 19.9631 3.55662 20.9186 4.39801 21.4902L4.73495 21.7191C5.50895 22.1111 6.44569 22.1796 7.31126 21.799C8.22758 21.3081 8.8515 20.3365 8.8515 19.2181V12.1458C8.8515 10.5325 7.55329 9.22468 5.95187 9.22468C4.35045 9.22468 3.05224 10.5325 3.05224 12.1458ZM13.0969 27.3996L9.49243 24.951C9.18759 24.7439 9.21508 24.2768 9.51991 24.0697L19.0228 17.6141C19.2539 17.4571 19.5564 17.4571 19.7875 17.6141L21.5982 18.8441C23.3925 20.0631 23.3925 22.724 21.5982 23.943L16.5099 27.3996C15.4785 28.1003 14.1283 28.1003 13.0969 27.3996ZM9.51745 6.9286L19.0228 13.3859C19.2539 13.5429 19.5564 13.5429 19.7875 13.3859L21.6058 12.1507C23.3962 10.9344 23.3965 8.27871 21.5982 7.05704L16.5099 3.60037C15.4785 2.89973 14.1283 2.89973 13.0969 3.60038L9.49018 6.05054C9.18642 6.25689 9.21369 6.72225 9.51745 6.9286Z"
						fill="url(#paint0_linear)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear"
							x1="13"
							y1="0"
							x2="13"
							y2="31"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#5467FF" />
							<stop offset="1" stop-color="#FF0056" />
						</linearGradient>
					</defs>
				</svg>
				<span class="ml-0 no-decoration">{name}</span>
			</a>
			<a
				href={source}
				class="monospace lh-1 text-000 p-000 radius-0000 border-hover border-w-1 ml-0"
			>
				v{version}
			</a>
		</div>
	</div>

	<ul role="list" class="pt-2 flow-y flow-g-0000 full-width bg-back">
		<input bind:value={term} placeholder="Search..." class="mb-2" />

		{#each Object.keys(filteredDocs) as category, i}
			<li class:mt-2={i > 0} class="flow-x flow-g-00 items-center pb-000">
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

		<ThemeSwitch class={open ? 'mt-2' : 'flow-grow pt-2'} />
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

	ul {
		list-style: none;
	}

	@media (min-width: 50rem) {
		nav {
			height: 100vh;
			overflow-y: auto;
		}

		button {
			display: none;
		}

		ul {
			height: 100%;
		}
	}

	@media (max-width: 50rem) {
		nav {
			border-bottom: 1px solid var(--color-hover);
		}

		nav[data-open='true'] {
			height: 100vh;
		}

		ul {
			position: absolute;
			top: 3.5rem;
			left: 0;
			max-height: 0;
			overflow-y: hidden;
			/* width: 100%; */
		}

		nav[data-open='true'] ul {
			max-height: calc(100vh - 4.5rem);
			height: 100%;
			overflow-y: auto;
			border-bottom: 1px solid var(--color-hover);
			padding: var(--size-0);
		}
	}
</style>
