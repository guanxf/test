'use strict';

module.exports = appInfo => {
    const config =  {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1527410647654_9855';

    // add your config here
    config.middleware = [];

    config.view = {
        defaultViewEngine: 'ejs',
        mapping: {
            '.html': 'ejs',
        }
    };

    return config;
};
