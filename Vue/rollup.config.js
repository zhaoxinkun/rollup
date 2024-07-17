import babel from "@rollup/plugin-babel"


// 在这里导出一个对象,作为打包的配置项
export default {
    // 入口
    input: "./src/index.js",
    // 出口
    output: {
        file: "./dist/vue.js",
        // 导出的名字
        name: "Vue",  //global.Vue
        // 打包方式
        format: "umd", //esm  commonjs  iife自执行函数  umd(cmj,amd ),
        // 可以调试源代码
        sourcemap: true,
    },
    plugins: [
        babel({
            exclude: "node_modules/**"  //排除node_modules下的所有
        }),

    ]
}
