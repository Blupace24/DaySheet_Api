import express from "express";
import {getDateOneInventorycake, getDateAllInventorycakes,createInventorycake } from "../controllers/inventorycake.js";

const router = express.Router();

router.post("/inventorycake", createInventorycake)
router.post("/getinventorycake", getDateOneInventorycake)
router.post("/getallinventorycakes", getDateAllInventorycakes)
export default router