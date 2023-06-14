const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
// tell the server we are using ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, resp) => {
  resp.render("home");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log(`server is running on port ${PORT}`);
  }
});
