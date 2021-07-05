<script>
	import Icon from '../layout/Icon.svelte';

	export let title = '';
	export let href = '/';
	export let selected = false;
	export let icon;
</script>

<li
	class:selected
	class:bg-hover={selected}
	class:py-000={icon}
	class:py-0000={!icon}
	class="nav-item | px-00 radius-00 hover:bg-hover transition"
>
	<a {href} class="no-underline flow-x flow-g-0 items-center" on:click sveltekit:prefetch>
		{#if icon}
			<Icon name={icon} class="transition text-gray-400" />
		{/if}
		<span class="no-underline">{title}</span>
	</a>
</li>

<style>
	:global(.nav-item:hover svg) {
		color: var(--color-gray-500);
	}

	.nav-item:hover span {
		font-weight: 600;
	}

	.selected span {
		font-weight: 600;
	}

	:global(.nav-item.selected svg) {
		color: var(--color-accent);
	}
</style>
