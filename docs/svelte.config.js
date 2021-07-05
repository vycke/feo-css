// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: true,
		vite: {}
	}
};

export default config;
