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