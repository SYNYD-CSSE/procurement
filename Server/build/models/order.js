"use strict";
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const ObjectId = mongoose.Schema.Types.ObjectId;
const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
        default: Date.now(),
        required: true
    },
    itemList: [{
            type: ObjectId,
            ref: "Item"
        }],
    quantity: {
        type: Number,
        default: 1,
        min: 1
    },
    status: {
        type: String,
        required: true,
        enum: ['Approved', 'Declined', 'Placed'],
        default: 'Placed'
    },
});
module.exports = mongoose.model("Order", orderSchema);
//# sourceMappingURL=order.js.map