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
	class="nav-item | px-00 py-000 lh-000 radius-000 hover:bg-hover transition-200"
>
	<a {href} class="no-decoration flow-x flow-g-0 items-center" on:click sveltekit:prefetch>
		{#if icon}
			<Icon name={icon} class="transition-200 text-gray-400" />
		{/if}
		<span class="no-decoration">{title}</span>
	</a>
</li>

<style>
	:global(.nav-item:hover svg) {
		color: var(--color-gray-500);
	}

	.selected span {
		font-weight: 600;
	}

	:global(.nav-item.selected svg) {
		color: var(--color-accent);
	}
</style>
