const { default: axios } = require("axios"); // axios
const express = require("express"); // express

const app = express.Router(); // 创建路由对象

app.get("/reg", (req, res) => {
    axios.get("http://localhost:3000/kk").then((response) => {
        const ff = {
            kk: response.data,
        }; // 对象格式
        res.render("reg", ff);
    }); // 获取数据并渲染页面
}); // 挂载具体的路由

module.exports = app; // 导出
