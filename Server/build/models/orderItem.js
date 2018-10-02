"use strict";
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
var autoIncrement = require('mongoose-auto-increment');
const orderItemSchema = new mongoose.Schema({
    orderItemId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    unit: {
        type: String
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});
autoIncrement.initialize(mongoose.connection);
orderItemSchema.plugin(autoIncrement.plugin, {
    model: 'OrderItem',
    field: 'orderItemId',
    startAt: 1000,
    incrementBy: 1
});
module.exports = mongoose.model("OrderItem", orderItemSchema);
//# sourceMappingURL=orderItem.js.map