const express = require("express");

const app = express();

app.use((err, req, res) => {
  console.log(err);
  res.status(500).send("web服务端错误");
});

app.listen(80);

console.log("http://127.0.0.1");
