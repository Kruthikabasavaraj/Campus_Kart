import express from "express"
import { signup } from "../controller/user.controller.js";
const router=express.Router();


router.post("/Signup",signup);

export default router;