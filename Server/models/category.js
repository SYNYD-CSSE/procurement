const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
var autoIncrement = require('mongoose-auto-increment');

const categorySchema = new mongoose.Schema({

    categoryId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    unit: {
        type: String
    }

});
autoIncrement.initialize(mongoose.connection);
categorySchema.plugin(autoIncrement.plugin, {
    model: 'Category',
    field: 'categoryId',
    startAt: 1000,
    incrementBy: 1
});

module.exports = mongoose.model("Category", categorySchema);