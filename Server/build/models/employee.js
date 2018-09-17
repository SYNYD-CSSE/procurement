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
    fisrtName: {
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
    }
});
const employee = mongoose_1.model("employee", employeeSchema);
exports.default = employee;
//# sourceMappingURL=employee.js.map