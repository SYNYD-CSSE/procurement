import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const path = require("path");
//const passport = require("passport");
const config = require("./config/database");
const Order = require("./routes/api/orders");
const Item = require("./routes/api/items");

mongoose.connect(config.database);

mongoose.connection.on("connected", () => {
  console.log(`connected to database ${config.database}`);
});
mongoose.connection.on("error", err => {
  console.log(`database connection failed ${err}`);
});

const app = express();

//passport middleware
//app.use(passport.initialize());

//passport config
//

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const port = 5000;

app.use("/items", Item);

app.get("/sample", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`listning to port ${port}`);
});
