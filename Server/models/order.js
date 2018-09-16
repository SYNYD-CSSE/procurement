const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        //  required: true
    },
    orderDate: {
        type: Date,
        default: Date.now,
        //    required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        required: true
    }],

    quantity: {
        type: Number,
        default: 1,
        min: 1
    },

    status: {
        type: String,
        //  required: true,
        enum: ['Approved', 'Declined', 'Placed'],
        default: 'Placed'
    },
});


module.exports = mongoose.model("Order", orderSchema);