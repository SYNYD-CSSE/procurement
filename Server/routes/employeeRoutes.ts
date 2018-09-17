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
        this.router.get("/:id",employeeController.getEmployee);
        this.router.post("/",employeeController.insterEmployee);
        this.router.delete("/:id",employeeController.deleteEmployee);
        this.router.put("/:id",employeeController.updateEmployee);
    }
}

const employeeRoutes = new EmployeeRoutes();
employeeRoutes.routes();

export default employeeRoutes.router;
