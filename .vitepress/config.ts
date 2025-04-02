import { defineConfig } from 'vitepress';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Title',
  description: 'Description',
  srcDir: 'src',
  themeConfig: {
    nav: [
      { text: 'sample', link: '/sample' },
      { text: '說明', link: '/' },
    ],
    // sidebar: [
    //   {
    //     text: '介紹',
    //     items: [
    //       { text: 'sample', link: '/sample' },
    //       { text: '說明', link: '/' },
    //     ],
    //   },
    // ],
  },
  vite: {
    resolve: {
      alias: {
        // 設定別名
        '@': path.resolve(__dirname, '../src/'),
        '@vitepress': path.resolve(__dirname),
        '@components': path.resolve(__dirname, '../src/', 'components'),
      },
    },
  },
});
