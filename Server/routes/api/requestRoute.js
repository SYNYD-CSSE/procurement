const express = require("express");
const router = express.Router();
const Request = require("../../models/request");

router.post("/order", (req, res, next) => {

    const request = new Request({
        itemList: req.body.orderDate,
        lastName: req.body.lastName,
        email: req.body.email,

    });
    request.save((err, result) => {
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }
        res.status(201).json({
            message: "User Created",
            obj: result
        });
    });
});

router.post("/login", (req, res, next) => {
    const {
        errors,
        isValid
    } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: "Login Failed",
                error: {
                    message: "Invalid login credentials"
                }
            });
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: "Login Failed",
                error: {
                    message: "Invalid login credentials"
                }
            });
        }

        const token = jwt.sign({
            user: user
        }, keys.secretOrKey, {
            expiresIn: 3600
        });
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        } else {
            res.status(200).json({
                message: "Successfully Logged In",
                token: "Bearer " + token,
                userId: user._id
            });
        }
    });
});

router.get(
    "/current",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        res.json({
            id: req.user._id,
            firstName: req.user.firstName,
            email: req.user.email
        });
    }
);

module.exports = router;