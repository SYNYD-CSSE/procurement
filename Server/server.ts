
import express, { NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import generate from "./config/generate";
import EmployeeRoutes from "./routes/EmployeeRoutes";
import UserRoutes from "./routes/userRoutes";
import Payment from "./routes/api/payment";
import Supplier from "./routes/api/suppliers";
import Quotations from "./routes/api/sentQuotations";
import config from "./config/database";
import jwt from "jsonwebtoken";

import path from "path";
import Order from "./routes/api/orders";
import Item from "./routes/api/items";
import OrderItem from "./routes/api/orderItems";

mongoose.connect(config.database, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log(`connected to database ${config.database}`);
});
mongoose.connection.on("error", err => {
  console.log(`database connection failed ${err}`);
});

const app = express();




app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
const port = 5000;

// Authorization

const access = {
  'Management'  : ['/items','/orderItems','/orders','/payment','/employees','/user','/suppliers','/quotations'],
  'Accountant'  : ['/orders','/payment'],
  'Constructor' : ['/orders','/items','/orderItems'],
  'SiteManager' : ['/orders','/orderItems','/suppliers'],
  'Supplier'    : ['/orders','/orderItems','/quotations'],
  'Regular'     : []
}

app.use((req, res, next) => {

  let path = req.path;
  if ( path === '/user/login') next();
  else {
    let token = (req.headers.authorization) ? req.headers.authorization : '';
    token = token.split(' ')[1];

    jwt.verify(token, config.secretOrKey, (err, decode ) => {
      if (err) {
        res.status(403).send("Invalid Accesspoint");
      }

      else{
        let role :String = (decode as any).role ;
        let accessbility = false;

        (access[role] as string[] ).forEach(e => {
            if(path.includes(e)) {
              accessbility= true;
            }
          });

        if(accessbility) next();
        else res.status(403).send("Invalid Accesspoint");
      }
 
    });
  }
});


app.use("/items", Item ); // Constructor Only
app.use("/orderItems", OrderItem); // SiteManager Constructor Accountant Supplier
app.use("/orders", Order);    // SiteManager Constructor Accountant Supplier
app.use("/payment", Payment); // Accountact Only
app.use("/employees", EmployeeRoutes); //Management Only
app.use("/user", UserRoutes); //Management Only Except Login
app.use("/suppliers", Supplier); // Management Only
app.use("/quotations", Quotations); //Supplier Only
generate.initilize();




app.listen(port, () => {
  console.log(`listning to port ${port}`);
});
