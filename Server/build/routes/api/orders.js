"use strict";
const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const Request = require("../../models/request");
const Item = require("../../models/item");
router.post("/add/item", (req, res, next) => {
    try {
        const item = new Item({
            name: req.body.name,
            quantity: req.body.quantity,
        });
        item.save((err, result) => {
=======
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
>>>>>>> dev
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
<<<<<<< HEAD
router.put("/order/item/add", (req, res, next) => {
    try {
        Item.findOne({
            _id: req.body.itemId
        }, (err, item) => {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }
            else {
                Request.update({
                    _id: req.body.orderId
                }, {
                    $addToSet: {
                        itemList: item._id
                    }
                }, (err, order) => {
                    if (err) {
                        return res.status(500).json({
                            title: "An error occured",
                            error: err
                        });
                    }
                    else {
                        res.send(order);
                    }
                });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
});
router.get("/order", (req, res, next) => {
    try {
        Request.find(function (err, requset) {
            if (err)
                return next(err);
            res.json(requset);
=======
//GET ALL ORDERS
router.get("/orders", (req, res, next) => {
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
//ORDER FIND BY ID
router.get("/:id", (req, res, next) => {
    try {
        Order.findOne({
            orderId: req.params.id
        }, (err, result) => {
            if (err)
                return next(err);
            res.json(result);
>>>>>>> dev
        });
    }
    catch (error) {
        console.log(error);
    }
});
<<<<<<< HEAD
=======
//Update ORDER
router.put('/:id', (req, res, next) => {
    Order.findOneAndUpdate({
        orderId: req.params.id
    }, {
        $set: {
            status: req.body.status,
            items: req.body.ItemId
        }
    }, (err, result) => {
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }
        res.status(201).json({
            message: "Order Updated",
            result
        });
    });
});
//REMOVE ORDER
router.delete('/:oid', (req, res, next) => {
    Order.remove({
        OrderId: req.params.oid
    }, (err, item) => {
        if (err)
            return res.json(err);
        res.json({
            msg: "order deleted",
        });
    });
});
>>>>>>> dev
module.exports = router;
//# sourceMappingURL=orders.js.map