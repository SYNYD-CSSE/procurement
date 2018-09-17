"use strict";
const express = require("express");
const router = express.Router();
const Item = require("../../models/item");
//GET ALL ITEMS
router.get("/", (req, res, next) => {
    try {
        Item.find((err, requset) => {
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
router.get("/:id", (req, res, next) => {
    try {
        Item.findOne({
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
});
//ADD ITEMS
router.post("/", (req, res, next) => {
    try {
        const item = new Item({
            id: req.body.id,
            name: req.body.name,
            unit: req.body.unit,
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
    }
    catch (error) {
        console.log(error);
    }
});
//Update Item
router.put('/:id', (req, res, next) => {
    Item.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: {
            name: req.body.name,
            unit: req.body.unit
        }
    }, (err, result) => {
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }
        res.status(201).json({
            message: "Item Updated",
            result
        });
    });
});
//REMOVE ITEMS
router.delete('/:id', (req, res, next) => {
    Item.findByIdAndRemove({
        _id: req.params.id
    }, (err, item) => {
        if (err)
            return res.json(err);
        res.json({
            msg: "item deleted",
            item: item
        });
    });
});
module.exports = router;
//# sourceMappingURL=items.js.map