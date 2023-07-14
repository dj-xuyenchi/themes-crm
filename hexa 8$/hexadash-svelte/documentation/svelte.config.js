import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@components': path.resolve('./src/lib/components'),
			'@data': path.resolve('./src/demo-data'),
			'@store': path.resolve('./src/lib/store'),
			'@apps': path.resolve('./src/lib/view/apps'),
			'@view': path.resolve('./src/lib/view')
		},
		prerender: {
			crawl: true
		}
	},
	preprocess: preprocess(),
};

export default config;