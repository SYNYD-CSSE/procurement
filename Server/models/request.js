const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const requestSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
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
        approved: {
            type: String
        },
        declined: {
            type: String
        },
        placed: {
            type: String
        },
    }
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Request", requestSchema);