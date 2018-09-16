const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const itemSchema = new mongoose.Schema({

    id: {
        type: String,
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


module.exports = mongoose.model("Item", itemSchema);