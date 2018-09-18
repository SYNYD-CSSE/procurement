import { Request , Response , NextFunction } from "express";
import Employee from "./../models/employee";
import bodyParser from "body-parser";
import generate from "../config/generate";

export default class employeeController {

    // GET ALL EMPLOYEES 
    public static getEmployees( req : Request , res : Response) :void {

       try {

            Employee.find({}).then((data)=>{
                    const status = res.statusCode;
                    const length = data.length;
                    const message = `${length} Employees has been returned.`;
                    res.json({
                        status,
                        message,
                        data
                    });
            }).catch((err)=>{
                    const status = res.statusCode;
                    const message = `Employee returning failed.`;
                    res.json({
                        status,
                        message,
                        err
                }); 
            });

       } catch (error) {

           console.log(`GetEmployees function goes wrong: ${error}`);
       
        }
        
    }

    // GET SINGLE EMPLOYEE BY EMPLOYEE_ID
    public static getEmployeeByID( req : Request , res : Response) :void {
        
        
       try {

            const id = req.params.id;
            Employee.find({id:id}).then((data)=>{

                    const status = res.statusCode;
                    res.json({
                        status,
                        data
                    });

            }).catch((err)=>{

                    const status = res.statusCode;
                    res.json({
                        status,
                        err
                }); 

            });

        } catch (error) {

            console.log(`GetEmployeeByID function goes wrong: ${error}`);
   
        }
 
    }

    // INSERT NEW EMPLOYEE
    public static insertEmployee( req : Request , res : Response) :void {
        try {

            let newid = generate.newID('E001').next().value;
            const employee = new Employee({

                id          : newid,
                firstName   : req.body.firstName,
                lastName    : req.body.lastName,
                address     : req.body.address,
                email       : req.body.email,
                phone       : req.body.phone
            
            });

            employee.save().then((data)=>{

                    const status = res.statusCode;
                    res.json({
                        status,
                        data
                    });

            }).catch((err)=>{

                    const status = res.statusCode;
                    res.json({
                        status,
                        err
                }); 

            });

        } catch (error) {

            console.log(`InsertEmployee function goes wrong: ${error}`);
     
        }
    }

    // DELETE A EMPLOYEE BY EMPLOYEE_ID
    public static deleteEmployeeByID( req : Request , res : Response) :void {
        
        try {

            const id = req.params.id;
            
            Employee.findOneAndRemove({id:id}).then((data)=>{

                    const status = res.statusCode;
                    res.json({
                        status,
                        data
                    });

            }).catch((err)=>{

                    const status = res.statusCode;
                    res.json({
                        status,
                        err
                }); 

            });

        } catch (error) {

            console.log(`DeleteEmployeeByID function goes wrong: ${error}`);
   
        }
    }

    // UPDATE A EMPLOYEE FIND BY EMPLOYEE_ID
    public static updateEmployeeByID( req : Request , res : Response):void {
       
        try {

            const id :string = req.params.id;
            const employee = new Employee({

                firstName   : req.body.firstName,
                lastName    : req.body.lastName,
                address     : req.body.address,
                email       : req.body.email,
                phone       : req.body.phone
            
            });

            Employee.findOneAndUpdate({id:id},employee).then((data)=>{

                    const status = res.statusCode;
                    res.json({
                        status,
                        data
                    });

            }).catch((err)=>{

                    const status = res.statusCode;
                    res.json({
                        status,
                        err
                }); 

            });

        } catch (error) {

            console.log(`UpdateEmployeeByID function goes wrong: ${error}`);
   
        }
    }
    
}