const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const sentQuotations = new mongoose.Schema({
    sentQuotationsId: {
        type: String,
        required: true
    },
    supplier:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: true
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },
    sentItemsList:[{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "inventoryItem",
        // required: true
        item: {
            type: String,
            required: true
        },
        unitprice: {
            type: Number,
            required: true
        },
        manufacturer:{
            type: String
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
    }]
});

autoIncrement.initialize(mongoose.connection);
orderSchema.plugin(autoIncrement.plugin, {
    model: 'sentQuotations',
    field: 'sentQuotationsId',
    startAt: 1,
    incrementBy: 1
});
module.exports = mongoose.model("sentQuotations", sentQuotationsSchema);