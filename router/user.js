// 导入express/data
const express = require("express");

// 创建路由对象
const app = express.Router();

// 挂载具体的路由
app.use("/user", (req, res) => {
    res.send("用户");
});

// 导出
module.exports = app;
