import userModel from "../models/auth.model";
import UserType from "../types/auth.type";

export const registerUser = async (payload: UserType) => {
    return await userModel.create(payload)
}

export const findUserByEmail = async (email: string) => {
    return await userModel.findOne({email})
}