// index.js
//导入模块成员
import { log } from "./logger"
import messages from "./messages"

// 使用模块成员
const msg = messages.hi;
log(msg)

// 测试node第三方模块
import _ from 'lodash-es';
console.log(_.capitalize('hello world'));


// 测试打包Json
import { name, version } from "../package.json"
console.log(name);
console.log(version);

// 测试打包common
import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// 分包:动态导入
import("./logger").then(({ log }) => {
    log("code splitting")
})