const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 9999;

app.get("/", (req, res) => {
  res.sendfile("index.html");
});

app.post("/", (req, res) => {
  var msg = req.body.msg;
  res.send(
    `<form action="/" method="post"><label for="msg">Message: </label><input type="text" name="msg" id=""><input type="submit" value="Send"><br><br>${
      "Message: " +
      msg +
      "<br> length:  " +
      msg.length +
      "<br > words: " +
      msg.trim().split(/\s+/).length
    }
    </form>`
  );
});

app.listen(port, () => {
  console.log(`Listening on socket http://localhost:${port}`);
});
