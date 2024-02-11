//引入封装好的 service
import service from "../api/service";

//声明一个基础接口变量
let baseURL;

//配置开发环境
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://127.0.0.1:3000/api';
}

// 配置生产环境
if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://127.0.0.1:3000/api';
}

//设置请求头（如果请求头统一的话可以在axios文件设置，则无须从这里传过去）
const header = {
    Accept: 'application/json;charset=UTF-8',
}

//根据自身需求
let _service={
    submitLogin(data) {
        const url = baseURL + '/login';
        return service.post(url, data, header);
    },
    submitRegister(data) {
        const url = baseURL + '/register';
        return service.post(url, data, header);
    }
}


//导出
export default _service