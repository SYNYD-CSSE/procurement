const express = require("express");
const router = express.Router();
const Order = require("../../models/sentQuotation");

router.post("/", (req, res, next) => {
    try {
        const order = new Order({
            supplier: req.body.supplier,
            order: req.body.order,
            sentItemsList: req.body.sentItemsList
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
    } catch (error) {
        console.log(error);
    }
});