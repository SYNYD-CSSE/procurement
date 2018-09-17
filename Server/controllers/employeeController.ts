import { Request , Response } from "express";
export default class employeeController {


    public static getEmployees( req : Request , res : Response) :void {
       res.send("Employee Comes Here").status(200);
    }
    public static getEmployee( req : Request , res : Response) :void {
       
    }
    public static insterEmployee( req : Request , res : Response) :void {
       
    }
    public static deleteEmployee( req : Request , res : Response) :void {
        
    }
    public static updateEmployee( req : Request , res : Response):void {
        
    }
    
}