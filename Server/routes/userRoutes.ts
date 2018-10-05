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
        this.router.get("/:id",userController.getUserByID);
        this.router.delete("/:id",userController.deleteUserByID);
        this.router.post("/login",userController.login);
        this.router.get("/logout",userController.logout);
        this.router.post("/",userController.newUser);
        this.router.put("/:id",userController.updateUserByID);
    }
}

const userRoutes = new UserRoutes();
userRoutes.routes();

export default userRoutes.router;
