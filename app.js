const express = require("express");
const morgan = require("morgan");
const views = require("./views/index");
const { db } = require("./models");

const app = express();

//use to log server request info to console
app.use(morgan("dev"));
//used to access our local assets (anything that would be in the public folder)
app.use(express.static(__dirname + "/public"));
//body parsers allow for proper formatting of request bodies in CRUD
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  let test = views.main("test");
  res.send(test);
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const port = 1337;

app.listen(port, () => {
  console.log(`App is listening in port ${port}`);
});
