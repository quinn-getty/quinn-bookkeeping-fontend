import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

import svgstore from './src/vite_plugins/svgstore'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9987
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    vueJsx({
      transformOn: true,
      mergeProps: true
    }),
    svgstore(),
  ]
})
