"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = __importDefault(require("../models/employee"));
class generate {
    constructor() {
        generate.initilize();
    }
    *newID(lastID) {
        let id = parseInt(lastID.substring(1));
        let letter = lastID.charAt(0);
        while (1) {
            id++;
            yield (id / 100 > 1) ? `${letter}${id}` : (id / 10 > 1) ? `${letter}0${id}` : `${letter}00${id}`;
        }
    }
    ;
}
generate.initilize = () => {
    generate.initilizeLastEmployeeID();
};
generate.initilizeLastEmployeeID = () => {
    employee_1.default.findOne({}).sort({ _id: -1 }).limit(1).then((data) => {
        generate.lastEmployeeID = (data == null) ? null : data.id;
        console.log(generate.lastEmployeeID);
    });
};
exports.default = generate;
//# sourceMappingURL=generate.js.map