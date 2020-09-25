const express = require("express");

const app = express();

function rootCall(req, res) {
  res.send("I know how to open node");
}

app.get("/", rootCall);

app.listen(3000, () => console.log("Listening to port 3000"));
