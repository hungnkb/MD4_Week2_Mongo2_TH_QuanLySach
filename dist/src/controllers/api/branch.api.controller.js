"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Branch_schema_1 = __importDefault(require("../../schemas/Branch.schema"));
class BranchAPI {
    constructor() {
        this.get = async (req, res) => {
            try {
                let branchList = await Branch_schema_1.default.find({});
                if (branchList) {
                    res.status(200).json(branchList);
                }
                else {
                    res.status(400).json({ message: 'error' });
                }
            }
            catch (error) {
                console.log(error);
            }
        };
    }
}
exports.default = new BranchAPI();
//# sourceMappingURL=branch.api.controller.js.map