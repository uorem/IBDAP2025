import express from 'express'
import {login, register,upload} from '../control/control.js'
// var express=require('express')  //导入express
var apiRouter=express.Router() //创建路由对象module.exports=router //向外导出对象

apiRouter.post('/login',login)//登录接口

apiRouter.post('/register',register)//注册接口

//文件上传接口
apiRouter.post('/upload', upload.single('filename'), function (req, res, next) {
    // console.log(req.body);
    res.send("文件已上传")
})

export default apiRouter
