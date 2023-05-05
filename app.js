const express = require("express");

const indexRouter = require("./router/index");  // 主页路由
const regRouter = require("./router/reg");      // 添加页路由

const app = express();

app.engine("html", require("express-art-template")); // 当渲染后缀名为html的模板时 使用express-art-template
app.set("views", "view");       // 设置模板存放目录
app.set("view engine", "html"); // 设置后缀名为html

app.use(require("body-parser").json());                         // 返回仅解析json和仅查看Content-Type标头与type选项匹配的请求的中间件 // 此解析器接受正文的任何 Unicode 编码，并支持自动膨胀 gzip和 deflate编码
app.use(require("body-parser").urlencoded({ extended: true })); // 返回仅解析 urlencoded正文并仅查看 Content-Type标头与 type选项匹配的请求的中间件 // 此解析器仅接受主体的 UTF-8 编码，并支持自动膨胀 gzip和 deflate编码。
app.use(indexRouter) // 主页
    .use(regRouter); // 添加页

app.listen(80);

console.log("http://127.0.0.1/kk");
