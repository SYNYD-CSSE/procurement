
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import generate from "./config/generate";
import EmployeeRoutes from "./routes/EmployeeRoutes";
import UserRoutes from "./routes/userRoutes";
import Payment from "./routes/api/paymentRoute";
import Supplier from "./routes/api/suppliers";
import InventroyItems from "./routes/api/inventoryItems";

const path = require("path");
//const passport = require("passport");
const config = require("./config/database");
const Order = require("./routes/api/orders");
const Item = require("./routes/api/items");
const OrderItem = require("./routes/api/orderItems");

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
app.use("/orderItems", OrderItem);
app.use("/orders", Order);
app.use("/payment", Payment);
app.use("/employees",EmployeeRoutes);
app.use("/user",UserRoutes);
app.use("/suppliers", Supplier);
app.use("/invetoryItems",InventroyItems);
generate.initilize();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + './../public/index.html'));
});


app.listen(port, () => {
  console.log(`listning to port ${port}`);
});
