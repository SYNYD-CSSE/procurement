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
const path = require("path");
const config = require("./config/database");
const Order = require("./routes/api/orders");
const Item = require("./routes/api/items");
const Payment = require("./routes/api/paymentRoute");
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
app.use("/orders", Order);
app.use("/", Payment);
app.get("/sample", (req, res) => {
    res.send("hello World");
});
app.listen(port, () => {
    console.log(`listning to port ${port}`);
    console.log(generate_1.default.newID('E001').next().value);
});
//# sourceMappingURL=server.js.map