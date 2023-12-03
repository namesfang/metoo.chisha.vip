import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode })=> {
	const env = loadEnv(mode, process.cwd(), [
		'PUBLIC_',
		'PRIVATE_'
	]);
	return {
		define: {
		},
		plugins: [sveltekit()],
		server: {
			port: 8000
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `$static: "${ mode === 'production' ? env.PUBLIC_STATIC_URL : ''}";`,
				}
			}
		}
	}
});
