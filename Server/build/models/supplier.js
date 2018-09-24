"use strict";
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const supplierSchema = new mongoose.Schema({
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
    inventoryItemsList: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "inventoryItem",
            required: true
        }],
    rating: {
        type: Number,
        required: true,
        default: 5
    }
});
module.exports = mongoose.model("supplier", supplierSchema);
//# sourceMappingURL=supplier.js.map