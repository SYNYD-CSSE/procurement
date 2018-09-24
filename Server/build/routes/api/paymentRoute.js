"use strict";
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const payment = require("../../models/payment");
// router.use(bodyParser.json());
router.get('/api/pay', function (req, res) {
    res.send('use /api/payments to post a record');
});
router.post('/api/payments', (req, res) => {
    var pay = req.body;
    payment.create(pay, function (err, success) {
        if (err) {
            throw err;
        }
        res.json(success);
    });
});
// router.post("/api/payments", (req, res, next) => {
//     try {
//         var pay = req.body;
//         payment.addPayment(pay, (err, payment) => {
//             if (err) {
//                 return res.status(500).json({
//                     title: "An error occured",
//                     error: err
//                 });
//             }
//             res.status(201).json({
//                 message: "Item Added",
//                 result
//             });
//         });
//     } catch (error) {
//         console.log(error);
//     }
// });
module.exports = router;
//# sourceMappingURL=paymentRoute.js.map