// logger
const log = msg => {
    console.log("--------------info---------------");
    console.log(msg);
    console.log("---------------------------------");
};

// messages.js
var messages = {
    hi: "hi  im akun "
};

// index.js
//导入模块成员
// 使用模块成员
const msg = messages.hi;
log(msg);
