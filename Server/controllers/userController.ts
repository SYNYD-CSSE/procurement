import { Request , Response , NextFunction } from "express";
import User from "./../models/user";
import bodyParser from "body-parser";
import generate from "../config/generate";
import bcrypt from "bcryptjs";

export default class employeeController {


    // GET ALL USER 
    public static login( req : Request , res : Response) :void {
        try {
            const username = req.body.username;
            const password = req.body.password
            User.findOne({username : username},(user) =>{
                bcrypt.compare(password, user.password , (err, res) => {
                    if(!err)
                    console.log("Password Compare Successfull!");
                    else 
                    console.log("Password Compare Failed!");
                  });
            });
        } catch (error) {
            console.log(`Login function goes wrong: ${error}`);
        }
    }

    // NEW USER ACCOUNT REGISTER
    public static newUser( req : Request , res : Response) :void {
        try {
            let password = bcrypt.hash(req.body.password, 'my salt');
            const user = new User({

                id          : req.body.id,
                username    : req.body.username,
                password    : password,
                role        : req.body.role,
            
            });

            user.save().then((data)=>{

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

            console.log(`New User Register function goes wrong: ${error}`);
     
        }
    }
    
}