import { Router } from "express";
import employeeController from "./../controllers/employeeController"

class EmployeeRoutes {
    public router : Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get("/",employeeController.getEmployees);
        this.router.get("/:id",employeeController.getEmployeeByID);
        this.router.post("/",employeeController.insertEmployee);
        this.router.delete("/:id",employeeController.deleteEmployeeByID);
        this.router.put("/:id",employeeController.updateEmployeeByID);
    }
}

const employeeRoutes = new EmployeeRoutes();
employeeRoutes.routes();

export default employeeRoutes.router;
