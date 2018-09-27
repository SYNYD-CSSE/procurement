"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = __importDefault(require("./../models/employee"));
const generate_1 = __importDefault(require("../config/generate"));
class employeeController {
    // GET ALL EMPLOYEES 
    static getEmployees(req, res) {
        try {
            employee_1.default.find({}).then((data) => {
                const status = res.statusCode;
                const length = data.length;
                const message = `${length} Employees has been returned.`;
                res.json({
                    status,
                    message,
                    data
                });
            }).catch((err) => {
                const status = res.statusCode;
                const message = `Employee returning failed.`;
                res.json({
                    status,
                    message,
                    err
                });
            });
        }
        catch (error) {
            console.log(`GetEmployees function goes wrong: ${error}`);
        }
    }
    // GET SINGLE EMPLOYEE BY EMPLOYEE_ID
    static getEmployeeByID(req, res) {
        try {
            const id = req.params.id;
            employee_1.default.findOne({ id: id }).then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            }).catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            });
        }
        catch (error) {
            console.log(`GetEmployeeByID function goes wrong: ${error}`);
        }
    }
    // INSERT NEW EMPLOYEE
    static insertEmployee(req, res) {
        try {
            const gen = new generate_1.default().newID(generate_1.default.lastEmployeeID);
            let newid = gen.next().value;
            const employee = new employee_1.default({
                id: newid,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                address: req.body.address,
                email: req.body.email,
                phone: req.body.phone,
                role: req.body.role,
                siteID: req.body.siteID
            });
            employee.save().then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            }).catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            });
        }
        catch (error) {
            console.log(`InsertEmployee function goes wrong: ${error}`);
        }
    }
    // DELETE A EMPLOYEE BY EMPLOYEE_ID
    static deleteEmployeeByID(req, res) {
        try {
            const id = req.params.id;
            employee_1.default.findOneAndRemove({ id: id }).then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            }).catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            });
        }
        catch (error) {
            console.log(`DeleteEmployeeByID function goes wrong: ${error}`);
        }
    }
    // UPDATE A EMPLOYEE FIND BY EMPLOYEE_ID
    static updateEmployeeByID(req, res) {
        try {
            const id = req.params.id;
            const employee = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                address: req.body.address,
                email: req.body.email,
                phone: req.body.phone,
                role: req.body.role,
                siteID: req.body.siteID
            };
            employee_1.default.findOneAndUpdate({ id: id }, employee).then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            }).catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            });
        }
        catch (error) {
            console.log(`UpdateEmployeeByID function goes wrong: ${error}`);
        }
    }
}
exports.default = employeeController;
//# sourceMappingURL=employeeController.js.map