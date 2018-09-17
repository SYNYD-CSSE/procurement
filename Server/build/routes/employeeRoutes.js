"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = __importDefault(require("./../controllers/employeeController"));
class employeeRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    routes() {
        this.router.get("/", employeeController_1.default.getEmployees);
        this.router.post("/", employeeController_1.default.insterEmployee);
        this.router.delete("/", employeeController_1.default.deleteEmployee);
        this.router.put("/", employeeController_1.default.updateEmployee);
    }
}
exports.default = employeeRoutes;
//# sourceMappingURL=employeeRoutes.js.map