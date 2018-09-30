const express = require("express");
const router = express.Router();
const OrderItem = require("../../models/orderItem");


//GET ALL ITEMS
router.get("/", (req, res, next) => {
    try {
        OrderItem.find((err, requset) => {
            if (err) return next(err);
            res.json(requset);
        });
    } catch (error) {
        console.log(error);
    }
});


//ITEM FIND BY ID

router.get("/:id", (req, res, next) => {
    try {
        OrderItem.findOne({
            orderItemId: req.params.id
        }, (err, result) => {
            if (err) return next(err);
            res.json(result);
        });
    } catch (error) {
        console.log(error)
    }
});




//ADD ITEMS
router.post("/", (req, res, next) => {
    try {
        const orderItem = new OrderItem({
            name: req.body.name,
            quantity: req.body.quantity,
            unit: req.body.unit,
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
    } catch (error) {
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
        },
        (err, result) => {
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
        }
    )
})


//REMOVE ITEMS
router.delete('/:pid', (req, res, next) => {
    OrderItem.remove({
        orderItemId: req.params.pid
    }, (err, item) => {
        if (err) return res.json(err);
        res.json({
            msg: "OrderItem deleted"
        });
    });
});


module.exports = router;