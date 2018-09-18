"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const path = require("path");
//const passport = require("passport");
const config = require("./config/database");
const Order = require("./routes/api/orders");
const Item = require("./routes/api/items");
const Supplier = require("./routes/api/suppliers");
const InventroyItems = require("./routes/api/inventoryItems");
mongoose_1.default.connect(config.database);
mongoose_1.default.connection.on("connected", () => {
    console.log(`connected to database ${config.database}`);
});
mongoose_1.default.connection.on("error", err => {
    console.log(`database connection failed ${err}`);
});
const app = express_1.default();
//passport middleware
//app.use(passport.initialize());
//passport config
//
app.use(body_parser_1.default.urlencoded({
    extended: false
}));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use(express_1.default.static(path.join(__dirname, "public")));
const port = 5000;
app.use("/items", Item);
app.use("/orders", Order);
app.use("/suppliers", Supplier);
app.use("/invetoryItems", InventroyItems);
app.get("/sample", (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    console.log(`listning to port ${port}`);
});
//# sourceMappingURL=server.js.map