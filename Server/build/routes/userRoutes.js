"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("./../controllers/userController"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", userController_1.default.getUsersList);
        this.router.post("/login", userController_1.default.login);
        this.router.post("/", userController_1.default.newUser);
    }
}
const userRoutes = new UserRoutes();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRoutes.js.map