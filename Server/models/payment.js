const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
var autoIncrement = require('mongoose-auto-increment');

const paymentSchema = new mongoose.Schema({
    paymentid: {
        type: String,
        required: true
    },
    orderid: {
        type: String
    },
    paymethod: {
        type: String
    },
    payno: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    amount:{
        type: String
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
    
});

autoIncrement.initialize(mongoose.connection);
paymentSchema.plugin(autoIncrement.plugin, {
    model: 'payment',
    field: 'paymentid',
    startAt: 10,
    incrementBy: 1
});

var payment = module.exports = mongoose.model("payment", paymentSchema);



