const express = require("express");
const router = express.Router();
const Request = require("../../models/order");
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
            } else {
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
                    } else {
                        res.send(order);
                    }
                });
            }
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