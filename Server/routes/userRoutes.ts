import { Router } from "express";
import userController from "./../controllers/userController"

class UserRoutes {
    public router : Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get("/",userController.getUsersList);
        this.router.post("/login",userController.login);
        this.router.post("/",userController.newUser);
    }
}

const userRoutes = new UserRoutes();
userRoutes.routes();

export default userRoutes.router;
