import { Router } from "express";
import { createUser, loginUser } from "../controllers/auth.controller";

export const AuthRouter : Router = Router()

AuthRouter.post('/register', createUser)
AuthRouter.post('/login', loginUser)