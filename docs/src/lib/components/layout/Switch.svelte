<script>
	import Icon from './Icon.svelte';

	let klass = '';
	export { klass as class };
	export let checked = false;
	export let label = '';
</script>

<label html="toggle" class="switch flex-row items-center justify-between {klass}">
	{label}
	<button class="ml-000" type="button" id="toggle" role="switch" aria-checked={checked} on:click>
		<span>
			<Icon name="check" />
		</span>
		<span>
			<Icon name="x" />
		</span>
	</button>
</label>

<style>
	button[role='switch'] {
		height: calc(1.4rem + 4px);
		background-color: var(--color-gray-400);
		border: 2px solid var(--color-gray-400);
		border-radius: 1rem;
		transition: all 400ms ease-in-out;
	}

	button[role='switch'][aria-checked='true'] {
		background-color: var(--color-accent);
		border-color: var(--color-accent);
	}

	button[role='switch'] span {
		display: inline-block;
		font-size: 1.4rem;
		line-height: 1.4rem;
		height: 1.4rem;
		min-width: 1.8rem;
		color: var(--color-back-secondary);
		border-radius: 2rem;
		pointer-events: none;
		transition: all 400ms ease-in-out;
	}

	button[role='switch'][aria-checked='true'] > :last-child,
	button[role='switch'][aria-checked='false'] > :first-child {
		background: var(--color-back-secondary);
	}
</style>
