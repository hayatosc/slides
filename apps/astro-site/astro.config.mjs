import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx()],
	// GitHub Pagesのベースパス設定
	base: '/slides',
	build: {
		// 静的ファイルの出力先
		outDir: './dist',
		assets: 'assets',
	},
});
