const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Item", itemSchema);