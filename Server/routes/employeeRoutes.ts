import { Router } from "express";
import employeeController from "./../controllers/employeeController"

export default class employeeRoutes {
    public router : Router;

    constructor(){
        this.router = Router();
    }

    routes(){
        this.router.get("/",employeeController.getEmployees);
        this.router.post("/",employeeController.insterEmployee);
        this.router.delete("/",employeeController.deleteEmployee);
        this.router.put("/",employeeController.updateEmployee);
    }
}