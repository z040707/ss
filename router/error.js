// 导入express/data
const express = require("express");

// 创建路由对象
const app = express.Router();

// 挂载具体的路由
app.use((req, res) => {
    res.send("404,页面跑路了");
});

// 导出
module.exports = app;
