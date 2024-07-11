// index.js
//导入模块成员
import { log } from "./logger"
import messages from "./messages"
// 使用模块成员
const msg = messages.hi;
log(msg)

// 测试打包Json
import { name, version } from "../package.json"
console.log(name);
console.log(version);