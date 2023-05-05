const { default: axios } = require("axios"); // axios
const express = require("express"); // express

const app = express.Router(); // 创建路由对象

app.get("/kk", (req, res) => {
    res.render("index");
}) // 渲染页面
    .post("/kk", (req, res) => {
        console.log(req.body);
        axios.post("http://localhost:3000/kk", req.body);
        res.redirect("reg");
    }); // 提交数据 // 挂载具体的路由

module.exports = app; // 导出
