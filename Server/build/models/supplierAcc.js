"use strict";
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const supplierAccSchema = new mongoose.Schema({
    supplierId: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("supplierAcc", supplierAccSchema);
//# sourceMappingURL=supplierAcc.js.map