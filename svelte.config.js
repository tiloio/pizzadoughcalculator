import preprocess from 'svelte-preprocess';
import adapter from 'svelte-adapter-deno';
// import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			out: 'build'
		  })
		// adapter: node()
	}
};

export default config;
