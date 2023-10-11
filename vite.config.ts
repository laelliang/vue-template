import { join } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import nodePolyfills from "rollup-plugin-polyfill-node";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // Enable rollup polyfills plugin
      // used during production bundling
      plugins: [nodePolyfills()],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
            process: true,
          }),
        ],
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',  // 目标服务器的地址
        changeOrigin: true,  // 是否改变源地址
        rewrite: path => {

          return path.replace(/^\/api/, '')
        }
      },
    }
  },
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
      '@router': join(__dirname, "router"),
      '@store': join(__dirname, "store"),
    }
  },
  plugins: [
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    vue()
  ],
})
