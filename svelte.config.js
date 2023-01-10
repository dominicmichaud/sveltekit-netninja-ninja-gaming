import adapter from '@sveltejs/adapter-auto';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocessor({
			scss: {
				prependData: '@use "src/bulma-variables.scss" as *;'
			}
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
