const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");


const constructorSchema = new mongoose.Schema({

    employeeId: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

// UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Constructor", constructorSchema);
