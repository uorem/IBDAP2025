import db from '../db/db.js'
import fs from 'fs'
import multer from 'multer'
import path from "path";
import { v1 as uuidV1 } from "uuid"
import  Request  from "express"
import { MulterError } from "multer"


// 登录接口方法
export async function login(req, res) {
    // const [rows] = await db.query('select id,name from user_t')
    const user_data = req.body.userdata[0].user_name
    const pwd_data = req.body.userdata[0].user_pwd
    fs.readFile('./data_storage.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        //2.将字符串数据转变成数组格式
        let arr = JSON.parse(data)
        if(JSON.stringify(arr).includes(JSON.stringify(user_data)) === false){ //判断是否在已注册的数组中
                res.send({
                    name_fault: 1
                })
        }else if(JSON.stringify(arr).includes(JSON.stringify(pwd_data)) === false){
            res.send({
                pwd_fault: 1
            })
        }else {
            res.send({
                log_success: 1
            })
        }
    })
}

// 注册接口方法
export async function register(req, res) {
    const reg_data = req.body.registerData[0]
    // let dir = path.join(__dirname, 'data_storage.json')
    fs.readFile('./data_storage.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        // console.log(data);
        //2.将字符串数据转变成数组格式
        let arr = JSON.parse(data)
        // console.log(arr);
        // let obj = reg_data
        if(JSON.stringify(arr).includes(JSON.stringify(reg_data.user_name)) === false){
            console.log('账号不存在')
            //2.1.给数组添加元素
            arr.push(reg_data)
            let newArr = JSON.stringify(arr)//将数组转成json格式
            // console.log(newArr);
            //3.写入需要的文件当中
            fs.writeFile('./data_storage.json', newArr, 'utf8', (err) => {
                console.log('账号写入成功', err)
                res.send({
                    reg_success: 1
                })
            })
        }else{
            console.log('账号已存在')
            res.send({
                registered: 1
            })
        }
    })
}

// 上传接口方法
// 返回一个硬盘存储对象
var myStorage = multer.diskStorage({
    // 设置文件存储的目标位置
    destination(req,file,callback){
        // req 请求对象
        // file 上传的文件信息 不是文件本身
        // console.log(file);
        // 设置完成的回调函数 需要手动调用确认完成
        callback(null,"./uploads")  // null 表示错误信息为空   "./public/file"  存储位置
    },

    // 设置 文件存储的名称
    filename(req,file,callback){
        callback(null,file.originalname);  //originalname: 上传的文件名
    }
})
export var upload = multer({storage:myStorage});


