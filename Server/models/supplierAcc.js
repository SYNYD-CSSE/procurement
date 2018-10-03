const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const supplierAccSchema = new mongoose.Schema({
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
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


module.exports = mongoose.model("supplierAcc", supplierAccSchema);