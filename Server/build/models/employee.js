"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    id: {
        type: String,
        default: 'E000',
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: '',
        required: true
    },
    lastName: {
        type: String,
        default: '',
        required: true
    },
    address: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        enum: ['Regular', 'Constructor', 'SiteManager', 'Management', 'Accountant'],
        default: 'Regular'
    },
    siteID: {
        type: Number,
        default: 0
    }
});
const employee = mongoose_1.model("employee", employeeSchema);
exports.default = employee;
//# sourceMappingURL=employee.js.map