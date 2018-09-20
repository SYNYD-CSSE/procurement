import { Request , Response , NextFunction } from "express";
import User from "./../models/user";
import bodyParser from "body-parser";
import generate from "../config/generate";
import bcrypt from "bcryptjs";

export default class employeeController {


    // GET ALL USER 
    public static login( req : Request , res : Response) :void {
        try {
            
            const user = {
                username    : req.body.username,
                password    : req.body.password
            
            };

            User.findOne({username: user.username},(err,data)=>{
                const status = res.statusCode;
                bcrypt.compare(user.password,(data as any).password,(err,isMatch)=>{
                    if(err){
                        throw err;
                    }
                    let message : string;
                    if(isMatch){
                        message = "Login success !";
                        res.json({
                            status,
                            message,
                            data
                        });
                    } 
                    else {
                        message = "Login Failed !";
                        res.json({
                            status,
                            message
                        });
                    }
                });
            });
            

        } catch (error) {

            console.log(`New User Register function goes wrong: ${error}`);
     
        }
    }
    // GET ALL USER 
    public static getUsersList( req : Request , res : Response) :void {
       try {

            User.find({}).then((data)=>{
                    const status = res.statusCode;
                    const length = data.length;
                    const message = `${length} Users has been returned.`;
                    res.json({
                        status,
                        message,
                        data
                    });
            }).catch((err)=>{
                    const status = res.statusCode;
                    const message = `User returning failed.`;
                    res.json({
                        status,
                        message,
                        err
                }); 
            });

       } catch (error) {

           console.log(`GetAllUser function goes wrong: ${error}`);
       
        }
    }

    // NEW USER ACCOUNT REGISTER
    public static newUser( req : Request , res : Response) :void {
        try {
            
            const user = {

                id          : req.body.id,
                username    : req.body.username,
                password    : req.body.password,
                role        : req.body.role,
            
            };

            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(user.password, salt, (err,hash)=>{
                    console.log(user.password);
                    user.password = hash;
                    console.log(hash);
                    console.log(user.password);
                    const newUser = new User (user);
                    newUser.save().then((data)=>{
                        
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
                });
            });
            

        } catch (error) {

            console.log(`New User Register function goes wrong: ${error}`);
     
        }
    }
    
}