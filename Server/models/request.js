const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const requestSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
        default: Date.now(),
        required: true
    },
    itemList: [{
        name: {
            type: String
        },
        quantity: {
            type: Number
        }
    }],

    status: {
        type: String,
        required: true,
        enum: ['Approved', 'Declined', 'Placed'],
        default: 'Placed'
    },
});


module.exports = mongoose.model("Request", requestSchema);