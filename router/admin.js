// 导入express/data
const express = require("express");

// 创建路由对象
const app = express.Router();

// 挂载具体的路由
app.use("/admin", (req, res) => {
    res.send("管理员");
});

// 导出
module.exports = app;
