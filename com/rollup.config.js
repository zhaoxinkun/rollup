import json from "rollup-plugin-json"
import reslove from "@rollup/plugin-node-resolve"
import commonjs from '@rollup/plugin-commonjs';
// rollup.config.js
export default {
    input: "src/index.js",
    output: {
        // file: 'dist/bundle.js',
        dir: "dist",
        format: 'amd',
    },
    plugins: [
        // 插件列表
        json(),
        reslove(),
        commonjs()
    ],

};