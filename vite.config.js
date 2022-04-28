import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// element-ui auto import
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        
    },
    build: {
        outDir: 'zuckpuls-web'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        // ...
        // AutoImport({
        //     imports: ['vue'],
        //     resolvers: [ElementPlusResolver()],
        // }),
        // Components({
        //     resolvers: [ElementPlusResolver()]
        // }),
    ],
    css: {
        //css预处理
        preprocessorOptions: {
            scss: {
                /*
                引入var.scss全局预定义变量，
                如果引入多个文件，
                可以使用
                '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
                这种格式
                 */
                additionalData: '@import "@/assets/scss/globalVariable.scss";@import "@/assets/scss/globalStyle.scss";'
            }
        }
    },
    server: {
        host: '0.0.0.0',
        port: 3001,
        proxy: {
            '/api': {
                // target: 'http://127.0.0.1:9101',
                // target: 'http://47.243.61.57',
                changeOrigin: true
                // rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
