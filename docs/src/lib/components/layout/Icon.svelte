<script>
	import * as feather from 'feather-icons';
	let klass = '';
	export { klass as class };

	export let name,
		attrs = undefined;

	$: svg = name ? feather.icons[name].toSvg({ ...attrs, class: klass }) : '';
</script>

<span class="lh-1 {klass}">{@html svg}</span>
