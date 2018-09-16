"use strict";
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const paymentSchema = new mongoose.Schema({
    paymentid: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
    // ,
    // sitemanager:{
    //     type:String,
    //     required: true
    // },
    // requestid:{
    //     type:String,
    //     required: true
    // },
    // supplierid:{
    //     type:String,
    //     required: true
    // },
    // paymethod: {
    //     type: String
    // }
});
// Add Book
// var addPayment = module.exports = (pay, callback) => {
// 	payment.create(pay, callback);
// }
var payment = module.exports = mongoose.model("payment", paymentSchema);
//# sourceMappingURL=payment.js.map