// // server.js
// let express = require("express");
// let app = express();
// app.get("/say", function (req, res) {
//   let { wd, callback } = req.query;
//   console.log(wd); // Iloveyou
//   console.log(callback); // show
//   res.end(`${callback}('我不爱你')`);
// });
// app.listen(3000);
let express = require("express");
let app = express();
app.get("/say", function (req, res) {
  let { wd, callback } = req.query;
  console.log(wd);
  res.end(`${callback}('服务端数据')`);
});
app.listen(3000);
