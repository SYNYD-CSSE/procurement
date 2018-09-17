"use strict";
const express = require("express");
const router = express.Router();
const Order = require("../../models/order");
const Item = require("../../models/item");
//ADD ORDER
router.post("/", (req, res, next) => {
    try {
        const order = new Order({
            status: req.body.status,
            items: req.body.itemId
        });
        order.save((err, result) => {
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
    }
    catch (error) {
        console.log(error);
    }
});
//GET ALL ORDERS
router.get("/", (req, res, next) => {
    Order
        .find()
        .populate('items', 'id name quantity unit -_id')
        .then(result => {
        res.status(200)
            .json(result);
    })
        .catch(error => {
        console.log(error);
    });
});
module.exports = router;
//# sourceMappingURL=orders.js.map