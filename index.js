const express = require("express");

const homeRouter = require("./router/home");
const adminRouter = require("./router/admin");
const userRouter = require("./router/user");
const errorRouter = require("./router/error");

const app = express();

app.use(homeRouter)     // 首页
    .use(adminRouter)   // 管理员
    .use(userRouter)    // 用户
    .use(errorRouter);  // 404

app.listen(80);

console.log("http://127.0.0.1");
