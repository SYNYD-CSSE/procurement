const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const inventoryItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    unitprice: {
        type: Number,
        required: true
    },
    manufacturer:{
        type: String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    quantity:{
        type: Number,
        required:true
    }, 
    totalValue:{
        type:Number,
        required: true
    }
});


module.exports = mongoose.model("inventoryItem", inventoryItemSchema);