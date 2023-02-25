import { Schema, model } from "mongoose";

interface IUser {
    username: string,
    password: string,
    role: {type: number, default: 2},
}


const userSchema = new Schema<IUser>({
    username: String,
    password: String,
    role: {type: Number, default: 2},
})

const User = model<IUser>('User', userSchema)

export {User};