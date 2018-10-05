import { Request , Response , NextFunction } from "express";
import User from "./../models/user";
import bodyParser from "body-parser";
import generate from "../config/generate";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/database";

export default class employeeController {


    // GET ALL USER 
    public static login( req : Request , res : Response) :void {
        try {
            
            const login = {
                username    : req.body.username,
                password    : req.body.password
            
            };

            User.findOne({username: login.username},(err,user)=>{
                const status = res.statusCode;
                bcrypt.compare(login.password,(user as any).password,(err,isMatch)=>{
                    

                    if(err){
                        throw err;
                    }
                    let message : string;
                    if(isMatch){
                        message = "Login success !";
                        const token = jwt.sign( login, config.secretOrKey, {
                            expiresIn : 8640 // One day
                        });
                        res.json({
                            status,
                            message,
                            token: 'JWT '+token,
                            user
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

    // GET SINGLE USER BY USER_ID
    public static getUserByID( req : Request , res : Response) :void {
        
        
        try {
 
             const id = req.params.id;
             User.findOne({id:id}).then((data)=>{
 
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
 
             console.log(`GetUserByID function goes wrong: ${error}`);
    
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
                    user.password = hash;
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