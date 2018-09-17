const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
var autoIncrement = require('mongoose-auto-increment');

const itemSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        default: 1,
        min: 1
    },
    unit: {
        type: String
    }

});
autoIncrement.initialize(mongoose.connection);
itemSchema.plugin(autoIncrement.plugin, {
    model: 'Item',
    field: 'id',
    startAt: 1000,
    incrementBy: 1
});

module.exports = mongoose.model("Item", itemSchema);