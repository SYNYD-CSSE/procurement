const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const supplierSchema = new mongoose.Schema({
    supplierId: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    bank:{
        type: String,
        required: true
    },
    branch:{
        type:String,
        required: true
    }
});


module.exports = mongoose.model("supplier", supplierSchema);