"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const router = express.Router();
const OrderItem = require("../../models/orderItem");
//GET ALL ITEMS
router.get("/", (req, res, next) => {
    try {
        OrderItem.find((err, requset) => {
            if (err)
                return next(err);
            res.json(requset);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//ITEM FIND BY ID
router.get("/:id", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield OrderItem.findOne({
            _id: req.params.id
        }, (err, result) => {
            if (err)
                return next(err);
            res.json(result);
        });
    }
    catch (error) {
        console.log(error);
    }
}));
//ADD ITEMS
router.post("/", (req, res, next) => {
    try {
        const orderItem = new OrderItem({
            name: req.body.name,
            quantity: req.body.quantity
        });
        orderItem.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }
            res.status(201).json({
                message: "Order Item Added",
                result
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
//Update Item
router.put('/:id', (req, res, next) => {
    OrderItem.findOneAndUpdate({
        orderItemId: req.params.id
    }, {
        $set: {
            name: req.body.name,
            unit: req.body.unit,
            quantity: req.body.quantity
        }
    }, (err, result) => {
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }
        res.status(201).json({
            message: "Order Item Updated",
            result
        });
        console.log(result); //bimali
    });
});
//REMOVE ITEMS
router.delete('/:pid', (req, res, next) => {
    OrderItem.remove({
        orderItemId: req.params.pid
    }, (err, item) => {
        if (err)
            return res.json(err);
        res.json({
            msg: "OrderItem deleted"
        });
    });
});
module.exports = router;
//# sourceMappingURL=orderItems.js.map