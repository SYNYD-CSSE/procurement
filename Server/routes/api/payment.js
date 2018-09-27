var mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const payment = require("../../models/payment");
// router.use(bodyParser.json());

router.get('/', function(req, res){
	res.send('use other routes for payment functions.');
});

router.get("/all", (req, res, next) => {
    payment.find().populate()
        .then(result => {
            res.status(200)
                .json(result);
        })

        .catch(error => {
            console.log(error);
        })
});

router.post('/create', (req, res) => {
	try {
        const pay = new payment({
            amount: req.body.amount
        });
        pay.save((err, result) => {
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

module.exports = router;