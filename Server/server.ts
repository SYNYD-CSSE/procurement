import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";

import generate from "./config/generate";

import path from "path";
import config from "./config/database";

import employeeRoutes from "./routes/EmployeeRoutes";
import Order from "./routes/api/orders";
import Item from "./routes/api/items";
import Payment from "./routes/api/paymentRoute";



mongoose.connect(config.database,{useNewUrlParser: true});

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
app.use("/orders", Order);
app.use("/", Payment);
app.use("/employees",employeeRoutes);


app.get("/sample", (req, res) => {
  res.send("hello World");
});



app.listen(port, () => {
  console.log(`listning to port ${port}`);
  console.log(generate.newID('E000').next().value);
  generate.initilizedLastEmployeeID();

  
});
