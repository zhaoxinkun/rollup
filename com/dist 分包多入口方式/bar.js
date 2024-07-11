define(['./logger-C3_ylhIs'], (function (logger) { 'use strict';

    var fetchApi = endpoint => {
        return fetch(`https://jsonplaceholder.typicode.com${endpoint}`).then((result) => {
            result.json();
        })
    };

    fetchApi("/posts/albumId=1").then(data => {
        data.forEach(element => {
            logger.log(element);
        });
    });

}));
