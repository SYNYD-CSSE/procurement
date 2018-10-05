"use strict";
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
var autoIncrement = require('mongoose-auto-increment');
const itemSchema = new mongoose.Schema({
    itemId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    unit: {
        type: String
    }
});
autoIncrement.initialize(mongoose.connection);
itemSchema.plugin(autoIncrement.plugin, {
    model: 'Item',
    field: 'itemId',
    startAt: 1000,
    incrementBy: 1
});
module.exports = mongoose.model("Item", itemSchema);
//# sourceMappingURL=item.js.map