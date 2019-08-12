const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const user = require("./routes/api/user");

const app = express();

//bodyParser  Middleware
app.use(bodyParser.json());

//DB
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Connected..."))
  .catch(err => console.log(err));

//use routes
app.use("/api/user", user);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started  on ${port}`));
