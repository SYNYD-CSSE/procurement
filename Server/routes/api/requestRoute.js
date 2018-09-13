const express = require("express");
const router = express.Router();
const Request = require("../../models/request");
const Item = require("../../models/item");



router.post("/add/item", (req, res, next) => {
    try {
        const item = new Item({
            name: req.body.name,
            quantity: req.body.quantity,
        });
        item.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }
            res.status(201).json({
                message: "Item Added",
                result
            });
        });
    } catch (error) {
        console.log(error);
    }
});



router.post("/order", (req, res, next) => {
    try {
        const request = new Request({
            orderId: req.body.orderId,
            itemList: request._id,
            status: req.body.status
        });
        request.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }
            res.status(201).json({
                message: "Order Placed",
                obj: result
            });
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/order", (req, res, next) => {
    try {

        Request.find(function (err, requset) {
            if (err) return next(err);
            res.json(requset);
        });
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;