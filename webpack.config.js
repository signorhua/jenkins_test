let path = require('path');

module.exports = {
  mode:'production', //模式 production生产 development开发
  entry:'./src/index.js', // 入口文件
  output:{
    filename:'build.js', //打包后的文件名
    path:path.resolve('dist'),  //当前目录底下的dist文件夹 ,必须是一个绝对路径
  }
}
