import { model, Schema } from "mongoose";

interface IBranch {
  nameBranch: string;
}

let branchSchemas = new Schema<IBranch>({
  nameBranch: String,
});

const Branch = model<IBranch>("Branch", branchSchemas);

export default Branch;
