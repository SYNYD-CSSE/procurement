"use strict";
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const inventoryItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    unitprice: {
        type: Number,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: float,
        required: true
    },
    totalValue: {
        type: float,
        required: true
    }
});
module.exports = mongoose.model("inventoryItem", inventoryItemSchema);
//# sourceMappingURL=inventory_item.js.map