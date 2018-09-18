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
const path_1 = __importDefault(require("path"));
const database_1 = __importDefault(require("./config/database"));
const EmployeeRoutes_1 = __importDefault(require("./routes/EmployeeRoutes"));
const orders_1 = __importDefault(require("./routes/api/orders"));
const items_1 = __importDefault(require("./routes/api/items"));
const paymentRoute_1 = __importDefault(require("./routes/api/paymentRoute"));
mongoose_1.default.connect(database_1.default.database, { useNewUrlParser: true });
mongoose_1.default.connection.on("connected", () => {
    console.log(`connected to database ${database_1.default.database}`);
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
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
const port = 5000;
app.use("/items", items_1.default);
app.use("/orders", orders_1.default);
app.use("/payment", paymentRoute_1.default);
app.use("/employees", EmployeeRoutes_1.default);
generate_1.default.initilize();
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname + './../public/index.html'));
});
app.listen(port, () => {
    console.log(`listning to port ${port}`);
});
//# sourceMappingURL=server.js.map