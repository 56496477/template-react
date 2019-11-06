const { DevUtil } = require('./utils');
const { resolve } = require('path');

exports.globalConfig ={
    host: DevUtil.getLocalHost() ,
    // host: '127.0.0.1' ,
    // publicPath: DevUtil.getPublicPath() ,
    publicPath: '/' ,
    port: 8090,
    outputPath: resolve('dist')
};


