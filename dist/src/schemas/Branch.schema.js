"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let branchSchemas = new mongoose_1.Schema({
    nameBranch: String,
});
const Branch = (0, mongoose_1.model)("Branch", branchSchemas);
exports.default = Branch;
//# sourceMappingURL=Branch.schema.js.map