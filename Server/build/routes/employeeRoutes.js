"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = __importDefault(require("./../controllers/employeeController"));
class EmployeeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", employeeController_1.default.getEmployees);
        this.router.get("/:id", employeeController_1.default.getEmployee);
        this.router.post("/", employeeController_1.default.insterEmployee);
        this.router.delete("/:id", employeeController_1.default.deleteEmployee);
        this.router.put("/:id", employeeController_1.default.updateEmployee);
    }
}
const employeeRoutes = new EmployeeRoutes();
employeeRoutes.routes();
exports.default = employeeRoutes.router;
//# sourceMappingURL=EmployeeRoutes.js.map