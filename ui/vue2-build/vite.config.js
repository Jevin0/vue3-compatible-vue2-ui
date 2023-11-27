import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import { baseBuildConfig } from '../vite.base.config'

export const viteVue2Config = defineConfig({
  plugins: [
    vue2(), 
    ScriptSetup({}),
    {
      name: 'vite-plugin-vue2-define-options',
      transform(src, id) {
        const vueRE = /\.vue$/;
        if (vueRE.test(id)) {
          if (src.includes('defineOptions')) {
            const defineOptionsRegex = /defineOptions\(([\s\S]*?)\);/;
            const match = src.match(defineOptionsRegex);

            if (match) {
              const defineOptionsParams = match[1].trim();
              return src.replace(defineOptionsRegex, '').replace(/const __sfc_main = {};/, `const __sfc_main = ${defineOptionsParams};`);
            }
          }
        }
      }
    }
  ],
  server: {
    port: 2000,
  },
  resolve: {
    alias: {
      'vue': resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
      'vue-demi': resolve(__dirname, '../node_modules/vue-demi/lib/v2/index.mjs'),
    },
  },
  ...baseBuildConfig,
})

export default viteVue2Config
