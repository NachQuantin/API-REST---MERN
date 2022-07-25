import express from "express";
import { Router } from "express";
import {login,register,refreshToken, logout} from "../controllers/auth.controller.js";
import {body} from "express-validator";
import { requireToken } from "../middlewares/requireToken.js";
import { infoUser } from "../controllers/auth.controller.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import { bodyLoginValidator, bodyRegisterValidator } from "../middlewares/validatorGenerate.js";

const router = Router();

router.post("/register",  bodyRegisterValidator,register);
router.post ("/login",bodyLoginValidator,login);
router.get("/protected", requireToken, infoUser);
router.get("/refresh", requireRefreshToken, refreshToken);
router.get("/logout", logout);


export default router;