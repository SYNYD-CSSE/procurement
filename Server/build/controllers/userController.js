"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../config/database"));
class employeeController {
    // GET ALL USER 
    static login(req, res) {
        try {
            const login = {
                username: req.body.username,
                password: req.body.password
            };
            user_1.default.findOne({ username: login.username }, (err, user) => {
                const status = res.statusCode;
                bcryptjs_1.default.compare(login.password, user.password, (err, isMatch) => {
                    if (err) {
                        throw err;
                    }
                    let message;
                    if (isMatch) {
                        message = "Login success !";
                        const token = jsonwebtoken_1.default.sign(login, database_1.default.secretOrKey, {
                            expiresIn: 8640 // One day
                        });
                        res.json({
                            status,
                            message,
                            token: 'JWT ' + token,
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
        }
        catch (error) {
            console.log(`New User Register function goes wrong: ${error}`);
        }
    }
    // GET ALL USER 
    static getUsersList(req, res) {
        try {
            user_1.default.find({}).then((data) => {
                const status = res.statusCode;
                const length = data.length;
                const message = `${length} Users has been returned.`;
                res.json({
                    status,
                    message,
                    data
                });
            }).catch((err) => {
                const status = res.statusCode;
                const message = `User returning failed.`;
                res.json({
                    status,
                    message,
                    err
                });
            });
        }
        catch (error) {
            console.log(`GetAllUser function goes wrong: ${error}`);
        }
    }
    // NEW USER ACCOUNT REGISTER
    static newUser(req, res) {
        try {
            const user = {
                id: req.body.id,
                username: req.body.username,
                password: req.body.password,
                role: req.body.role,
            };
            bcryptjs_1.default.genSalt(10, (err, salt) => {
                bcryptjs_1.default.hash(user.password, salt, (err, hash) => {
                    user.password = hash;
                    const newUser = new user_1.default(user);
                    newUser.save().then((data) => {
                        const status = res.statusCode;
                        res.json({
                            status,
                            data
                        });
                    }).catch((err) => {
                        const status = res.statusCode;
                        res.json({
                            status,
                            err
                        });
                    });
                });
            });
        }
        catch (error) {
            console.log(`New User Register function goes wrong: ${error}`);
        }
    }
}
exports.default = employeeController;
//# sourceMappingURL=userController.js.map