"use strict";
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const sentQuotations = new mongoose.Schema({
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "supplier",
        required: true
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },
    sentItemsList: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "inventoryItem",
            required: true
        }]
});
module.exports = mongoose.model("sentQuotations", sentQuotationsSchema);
//# sourceMappingURL=sentQuotations.js.map