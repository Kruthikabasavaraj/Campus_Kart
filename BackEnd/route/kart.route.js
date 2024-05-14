import express from "express"
import {getkart} from "../controller/kart.controller.js"

const router=express.Router();

router.get("/",getkart);


export default router;
