"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class generate {
    // public static employeeID :IterableIterator<string>;
    constructor() {
        //let lastEmployeeID : string = employee.find({}).sort({x:1}).limit(1);
        //generate.employeeID = this.newID('E001');
    }
    static *newID(lastID) {
        let id = parseInt(lastID.substring(1));
        let letter = lastID.charAt(0);
        while (1) {
            id++;
            yield (id / 100 > 1) ? `${letter}${id}` : (id / 10 > 1) ? `${letter}0${id}` : `${letter}00${id}`;
        }
    }
    ;
}
exports.default = generate;
//# sourceMappingURL=generate.js.map