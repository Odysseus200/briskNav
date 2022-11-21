import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy';
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    legacy({
      target:['defaults','not IE 11']
    }),
    vue()],
  publicPath:'./',
  outputDir:'dist',
  assetsDir:'assets',
  base:'./',
  filenameHashing: true, // 默认在生成的静态资源文件名中包含hash以控制缓存
  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建

})
