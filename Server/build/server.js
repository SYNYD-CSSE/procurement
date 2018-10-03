"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const generate_1 = __importDefault(require("./config/generate"));
const EmployeeRoutes_1 = __importDefault(require("./routes/EmployeeRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const paymentRoute_1 = __importDefault(require("./routes/api/paymentRoute"));
const suppliers_1 = __importDefault(require("./routes/api/suppliers"));
const sentQuotations_1 = __importDefault(require("./routes/api/sentQuotations"));
const path = require("path");
//const passport = require("passport");
const config = require("./config/database");
const Order = require("./routes/api/orders");
const Item = require("./routes/api/items");
const OrderItem = require("./routes/api/orderItems");
mongoose_1.default.connect(config.database, { useNewUrlParser: true });
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
app.use("/orderItems", OrderItem);
app.use("/orders", Order);
app.use("/payment", paymentRoute_1.default);
app.use("/employees", EmployeeRoutes_1.default);
app.use("/user", userRoutes_1.default);
app.use("/suppliers", suppliers_1.default);
app.use("/quotations", sentQuotations_1.default);
generate_1.default.initilize();
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + './../public/index.html'));
});
app.listen(port, () => {
    console.log(`listning to port ${port}`);
});
//# sourceMappingURL=server.js.map