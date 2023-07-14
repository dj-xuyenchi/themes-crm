import {
	sveltekit
} from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	define: {
		'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
	},
	resolve: {
		dedupe: ['@fullcalendar/common'],
	},
	optimizeDeps: {
		include: ['@fullcalendar/common'],
	},
	/* target: "#svelte",
    vite: {
      ssr: {
        noExternal: ["dayjs", "svelet-fullcalendar"],
      },
    }, */
};

export default config;