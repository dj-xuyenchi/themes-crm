import { fileURLToPath } from 'node:url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import vuetify from 'vite-plugin-vuetify'
import laravel from 'laravel-vite-plugin'

// @ts-expect-error Known error: https://github.com/sxzz/unplugin-vue-macros/issues/257#issuecomment-1410752890
import DefineOptions from 'unplugin-vue-define-options/vite'
import laravel from 'laravel-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    laravel({
  input: ['resources/ts/main.ts'],
  refresh: true,
}),
    vue({
  template: {
      transformAssetUrls: {
          base: null,
          includeAbsolute: false,
      },
  },
}),
    vueJsx(),

    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      styles: {
        configFile: 'resources/styles/variables/_vuetify.scss',
      },
    }),
    Pages({
      dirs: ['./resources/ts/pages'],

      // ℹ️ We need three routes using single routes so we will ignore generating route for this SFC file
      onRoutesGenerated: routes => [
        // Email filter
        {
          path: '/apps/email/:filter',
          name: 'apps-email-filter',
          component: '/resources/ts/pages/apps/email/index.vue',
          meta: {
            navActiveLink: 'apps-email',
            layoutWrapperClasses: 'layout-content-height-fixed',
          },
        },

        // Email label
        {
          path: '/apps/email/label/:label',
          name: 'apps-email-label',
          component: '/resources/ts/pages/apps/email/index.vue',
          meta: {
            // contentClass: 'email-application',
            navActiveLink: 'apps-email',
            layoutWrapperClasses: 'layout-content-height-fixed',
          },
        },
        ...routes,
      ],
    }),
    Layouts({
      layoutsDirs: './resources/ts/layouts/',
    }),
    Components({
      dirs: ['resources/ts/@core/components', 'resources/ts/views/demos', 'resources/ts/components'],
      dts: true,
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/math', 'vue-i18n', 'pinia'],
      vueTemplate: true,
    }),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        fileURLToPath(new URL('./resources/ts/plugins/i18n/locales/**', import.meta.url)),
      ],
    }),
    DefineOptions(),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@core-scss': fileURLToPath(new URL('./resources/styles/@core', import.meta.url)),
      '@': fileURLToPath(new URL('./resources/ts', import.meta.url)),
      '@themeConfig': fileURLToPath(new URL('./themeConfig.ts', import.meta.url)),
      '@core': fileURLToPath(new URL('./resources/ts/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./resources/ts/@layouts', import.meta.url)),
      '@images': fileURLToPath(new URL('./resources/images/', import.meta.url)),
      '@styles': fileURLToPath(new URL('./resources/styles/', import.meta.url)),
      '@configured-variables': fileURLToPath(new URL('./resources/styles/variables/_template.scss', import.meta.url)),
      '@axios': fileURLToPath(new URL('./resources/ts/plugins/axios', import.meta.url)),
      '@validators': fileURLToPath(new URL('./resources/ts/@core/utils/validators', import.meta.url)),
      'apexcharts': fileURLToPath(new URL('node_modules/apexcharts-clevision', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      './resources/ts/**/*.vue',
    ],
  },
})
