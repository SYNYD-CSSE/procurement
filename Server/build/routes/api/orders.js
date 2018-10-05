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
            //constructor details should come here
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
//ORDER FIND BY ID
<<<<<<< HEAD
router.get("/:id", (req, res, next) => {
    Order.findOne({ orderId: req.params.id }).
        populate('items').
        exec((err, result) => {
        if (err)
            return next(err);
        res.json(result);
=======
// router.get("/order/:id", (req, res, next) => {
//         Order.findOne({
//             orderId: req.params.id
//         }).populate('items', 'id name quantity unit -_id')
//         .then(result => {
//             res.status(200)
//                 .json(result);
//         })
//         .catch(error => {
//             console.log(error);
//         })
// });
router.get("/order/:id", (req, res, next) => {
    Order.findOne({
        orderId: req.params.id
    }).populate('items', '_id name quantity unit')
        .then(result => {
        res.status(200)
            .json(result);
    })
        .catch(error => {
        console.log(error);
>>>>>>> bimali
    });
});
//ORDER FIND BY status
router.get("/status/:status", (req, res, next) => {
    try {
        Order.find({
            status: req.params.status
        }, (err, result) => {
            if (err)
                return next(err);
            res.json(result);
        });
    }
    catch (error) {
        console.log(error);
    }
});
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
<<<<<<< HEAD
router.put('/abc/:id', (req, res, next) => {
    Order.findOneAndUpdate({ orderId: req.params.id }, { $set: {
            status: req.body.status,
            approvedDate: new Date()
        } }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ msg: 'Successfully Updated', obj: result });
        }
    });
});
=======
>>>>>>> bimali
//Update the order state to closed
router.put('/closed/:id', (req, res, next) => {
    Order.findOneAndUpdate({
        orderId: req.params.id
    }, {
        $set: {
            status: 'Closed'
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
//get approved orders
router.get("/approvedOrders", (req, res, next) => {
    Order
        .find({
        status: 'Approved'
    })
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