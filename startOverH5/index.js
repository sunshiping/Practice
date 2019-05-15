var express = require('express');
var app = express();
app.get('/taroH5',function (request,reponse) {
  reponse.sendFile(__dirname+'/dist/index.html');
  })
  app.use(express.static('dist'))
  app.listen(8088,function () { 
    console.log('应用服务已经启动了！')
   })