<script>
	import * as feather from 'feather-icons';

	let klass = '';
	export { klass as class };
	export let checked = false;
	export let label = '';

	$: close = feather.icons.x.toSvg();
	$: open = feather.icons.check.toSvg();
</script>

<label html="toggle" class="switch flex-row items-center justify-between {klass}">
	{label}
	<button
		class="ml-000 bg-gray-3 border-w-2 border-gray-3 radius-0 transition-400"
		type="button"
		id="toggle"
		role="switch"
		aria-checked={checked}
		on:click
	>
		<span class="text-back-secondary">{@html open}</span>
		<span class="text-back-secondary">{@html close}</span>
	</button>
</label>

<style>
	button {
		height: calc(1.5rem + 4px);
	}

	button[role='switch'][aria-checked='true'] {
		background-color: var(--color-accent);
		border-color: var(--color-accent);
	}

	span {
		display: inline-block;
		font-size: 1.5rem;
		line-height: 1.5rem;
		height: 1.5rem;
		min-width: 1.8rem;
		border-radius: 2rem;
		pointer-events: none;
		transition: background-color 400ms ease;
	}

	button[role='switch'][aria-checked='true'] > :last-child,
	button[role='switch'][aria-checked='false'] > :first-child {
		background-color: var(--color-back-secondary);
	}
</style>
