const express = require("express");
const app = express();
app.use(express.json());
const port = 9999;

app.get("/", (req, res) => {
  res.sendfile("index.html");
});

// app.post("/msg", (req, res) => {
//     var msg = req.body.msg
//     res.send(msg + "<br> length: "+  msg.length)
// });

app.post("/", (req, res) => {
  var msg = req.body.msg;
  res.send(
    `<form action="/" method="post"><label for="msg">Message: </label><input type="text" name="msg" id=""><input type="submit" value="Send"><br><br>${
      "Message: " + msg + "<br> length:  " + msg.length
    }</form>`
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
