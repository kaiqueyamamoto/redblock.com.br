const express = require("express");
const index = require("../index.html");

const server = express();
server.engine("html", require("ejs").renderFile);

server.get("/", (req, res) => {
  res.render(index);
});

server.listen(3000, () => {
  console.log("Server UP");
});
