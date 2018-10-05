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
const payment_1 = __importDefault(require("./routes/api/payment"));
const suppliers_1 = __importDefault(require("./routes/api/suppliers"));
const sentQuotations_1 = __importDefault(require("./routes/api/sentQuotations"));
const database_1 = __importDefault(require("./config/database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
const orders_1 = __importDefault(require("./routes/api/orders"));
const items_1 = __importDefault(require("./routes/api/items"));
const orderItems_1 = __importDefault(require("./routes/api/orderItems"));
mongoose_1.default.connect(database_1.default.database, { useNewUrlParser: true });
mongoose_1.default.connection.on("connected", () => {
    console.log(`connected to database ${database_1.default.database}`);
});
mongoose_1.default.connection.on("error", err => {
    console.log(`database connection failed ${err}`);
});
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({
    extended: false
}));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
const port = 5000;
<<<<<<< HEAD
// Authorization
const access = {
    'Management': ['/items', '/orderItems', '/orders', '/payment', '/employees', '/user', '/suppliers', '/quotations'],
    'Accountant': ['/orders', '/payment'],
    'Constructor': ['/orders', '/items', '/orderItems'],
    'SiteManager': ['/orders', '/orderItems', '/suppliers'],
    'Supplier': ['/orders', '/orderItems', '/quotations'],
    'Regular': []
};
app.use((req, res, next) => {
    let path = req.path;
    if (path === '/user/login')
        next();
    else {
        let token = (req.headers.authorization) ? req.headers.authorization : '';
        token = token.split(' ')[1];
        jsonwebtoken_1.default.verify(token, database_1.default.secretOrKey, (err, decode) => {
            if (err) {
                res.status(403).send("Invalid Accesspoint");
            }
            else {
                let role = decode.role;
                let accessbility = false;
                access[role].forEach(e => {
                    if (path.includes(e)) {
                        accessbility = true;
                    }
                });
                if (accessbility)
                    next();
                else
                    res.status(403).send("Invalid Accesspoint");
            }
        });
    }
=======
app.use("/items", Item);
app.use("/orderItems", OrderItem);
app.use("/orders", Order);
app.use("/payment", payment_1.default);
app.use("/employees", EmployeeRoutes_1.default);
app.use("/user", userRoutes_1.default);
app.use("/suppliers", suppliers_1.default);
app.use("/quotations", sentQuotations_1.default);
generate_1.default.initilize();
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + './../public/index.html'));
>>>>>>> bimali
});
app.use("/items", items_1.default); // Constructor Only
app.use("/orderItems", orderItems_1.default); // SiteManager Constructor Accountant Supplier
app.use("/orders", orders_1.default); // SiteManager Constructor Accountant Supplier
app.use("/payment", payment_1.default); // Accountact Only
app.use("/employees", EmployeeRoutes_1.default); //Management Only
app.use("/user", userRoutes_1.default); //Management Only Except Login
app.use("/suppliers", suppliers_1.default); // Management Only
app.use("/quotations", sentQuotations_1.default); //Supplier Only
generate_1.default.initilize();
app.listen(port, () => {
    console.log(`listning to port ${port}`);
});
//# sourceMappingURL=server.js.map