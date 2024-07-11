define(['exports'], (function (exports) { 'use strict';

    // logger
    const log = msg => {
        console.log("--------------info---------------");
        console.log(msg);
        console.log("---------------------------------");
    };

    exports.log = log;

}));
