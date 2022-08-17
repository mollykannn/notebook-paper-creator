import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
  base: '/notebook-paper-creator',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue': ['vue'],
          'jspdf': ['jspdf'],
          'html2canvas': ['html2canvas']
        }
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue',
      {
        'jspdf': ['jsPDF'],
      }],
      eslintrc: { enabled: true },
      dirs: ['src/assets/js/**'],
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [NaiveUiResolver()],
    }),
    StylelintPlugin({
      fix: true,
    }),
    eslintPlugin({
      include: ['src/**/*.vue', 'src/**/*.js'],
    }),
    VitePWA({
      workbox: {
        sourcemap: true,
      },
      mode: 'development',
      base: '/notebook-paper-creator/',
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Notebook Paper Creator',
        short_name: 'Notebook Paper Creator',
        description: 'Notebook Paper Creator',
        theme_color: '#0079d2',
        start_url: './index.html',
        lang: 'zh-Hant-HK',
        dir: 'ltr',
        orientation: 'portrait',
        icons: [
          {
            src: 'img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssNested, postcssPresetEnv],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
