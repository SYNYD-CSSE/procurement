"use strict";
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
var autoIncrement = require('mongoose-auto-increment');
const supplierSchema = new mongoose.Schema({
    supplierId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    itemsList: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "item"
        }],
    rating: {
        type: Number,
        required: true,
        default: 5
    }
});
autoIncrement.initialize(mongoose.connection);
supplierSchema.plugin(autoIncrement.plugin, {
    model: 'Supplier',
    field: 'supplierId',
    startAt: 1,
    incrementBy: 1
});
module.exports = mongoose.model("Supplier", supplierSchema);
//# sourceMappingURL=supplier.js.map