import { Request , Response , NextFunction } from "express";
import Employee from "./../models/employee";
import bodyParser from "body-parser";

export default class employeeController {


    public static getEmployees( req : Request , res : Response) :void {
       Employee.find({}).then((data)=>{
            const status = res.statusCode;
            res.json({
                status,
                data
            });
       }).catch((error)=>{
            const status = res.status;
            res.json({
                status,
                error
        }); 
       });
    }
    public static getEmployee( req : Request , res : Response) :void {
        let id = req.params.id;
        Employee.find({id:id}).then((data)=>{
            const status = res.statusCode;
            res.json({
                status,
                id,
                data
            });
       }).catch((error)=>{
            const status = res.status;
            res.json({
                status,
                error
        }); 
       });
    }
    public static insterEmployee( req : Request , res : Response) :void {
       
    }
    public static deleteEmployee( req : Request , res : Response) :void {
        
    }
    public static updateEmployee( req : Request , res : Response):void {
        
    }
    
}