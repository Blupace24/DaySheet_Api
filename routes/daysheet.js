import express from "express";
import { createDaysheet } from "../controllers/daysheet.js";

const router = express.Router();

router.post("/daysheets", createDaysheet)

export default router