import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import { baseBuildConfig } from '../vite.base.config'

export const viteVue2Config = defineConfig({
  plugins: [
    vue2(),
    {
      name: 'vite-plugin-vue2.7-define-options',
      transform(src, id) {
        const vueRE = /\.vue$/;
        if (vueRE.test(id)) {
          if (src.includes('defineOptions')) {
            const defineOptionsRegex = /defineOptions\(([\s\S]*?)\}\)/;
            const match = src.match(defineOptionsRegex);

            if (match) {
              const defineOptionsParams = match[1].trim();
              console.log(defineOptionsParams, 'defineOptionsParams');
              
              return src.replace(defineOptionsRegex, '').replace(/const _sfc_main = {/, `const _sfc_main = ${defineOptionsParams},`);
            }
          }
        }
      }
    }
  ],
  server: {
    port: 2700,
  },
  resolve: {
    alias: {
      'vue': resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
      'vue-demi': resolve(__dirname, '../node_modules/vue-demi/lib/v2.7/index.mjs'),
    },
  },
  ...baseBuildConfig,
  build: {
    ...baseBuildConfig.build,
    outDir: resolve(__dirname, '../dist/v2.7'),
  },
})

export default viteVue2Config
