import express from "express";
import { createDaysheet,findYesterdayDaysheet } from "../controllers/daysheet.js";

const router = express.Router();

router.post("/daysheets", createDaysheet)
router.post("/yesterdayDaySheet", findYesterdayDaysheet)
export default router