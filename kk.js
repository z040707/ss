const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("进行是否登录");
    let islogin = true;
    if (islogin) {
        next("/index");
    } else {
        res.send("未登录");
    }
});

app.get("/index", (req, res) => {
    res.send("欢迎进入主页");
});

app.use((req, res) => {
    res.send("404");
});

app.listen(80);

console.log("http://127.0.0.1");
