const mongoose = require("mongoose");
const inventoryItem = require(inventoryItem);
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
    email:{
        type: String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    inventoryItems:{
        type: [inventoryItem],
        required:true
    }
});


module.exports = mongoose.model("supplier", supplierSchema);