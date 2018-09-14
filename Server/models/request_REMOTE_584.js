const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const ObjectId = mongoose.Schema.Types.ObjectId

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
        type: ObjectId,
        ref: "Item"
    }],

    status: {
        type: String,
        required: true,
        enum: ['Approved', 'Declined', 'Placed'],
        default: 'Placed'
    },
});


module.exports = mongoose.model("Request", requestSchema);