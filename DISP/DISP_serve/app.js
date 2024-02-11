import express from 'express'
// import userRouter from './router/serve_router.js'
import apiRouter from './router/serve_router.js'


import cors from "cors"




const app = express()
app.use(cors()); //使用cors中间件
app.use(express.urlencoded({ extended: false }))
//处理前端传递json数据 parse application/json
app.use(express.json())
app.use((req, res, next) => {
    res.set('X-Content-Type-Options', 'nosniff');
    res.set('Cache-Control', 'no-store');
    res.set('X-XSS-Protection', '1; mode=block');
    res.set('Strict-Transport-Security', '3600');
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
    next();
});

app.use('/api',apiRouter)
// app.use('/api',userRouter)
app.listen(3000,function(){
    console.log('server running at http://127.0.0.1');
})
