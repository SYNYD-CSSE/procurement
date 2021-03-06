const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
var autoIncrement = require('mongoose-auto-increment');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    constructorId: {
        type: Number,
        default: 1
        // required: true
    },
    siteManagerId: {
        type: Number,
        default: null
        // required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
        //    required: true
    },
    amount: {
        type: String
    },

    approvedDate: {
        type: Date,
        default:null
        //    required: true
    },
    rejectedDate: {
        type: Date,
        default:null
        //    required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItem",
        required: true
    }],

    status: {
        type: String,
        //  required: true,
        enum: ['Pending', 'Approved', 'Declined', 'Placed', 'Closed'],
        default: 'Pending'
    },
});

autoIncrement.initialize(mongoose.connection);
orderSchema.plugin(autoIncrement.plugin, {
    model: 'Order',
    field: 'orderId',
    startAt: 1,
    incrementBy: 1
});


module.exports = mongoose.model("Order", orderSchema);