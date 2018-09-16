"use strict";
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    items: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
            required: true
        }],
    quantity: {
        type: Number,
        default: 1,
        min: 1
    },
    status: {
        type: String,
        //  required: true,
        enum: ['Approved', 'Declined', 'Placed'],
        default: 'Placed'
    },
});
module.exports = mongoose.model("Order", orderSchema);
//# sourceMappingURL=order.js.map