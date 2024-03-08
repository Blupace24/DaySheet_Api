import express from "express";
import {getDateOneInventorywala, getDateAllInventorywalas,createInventorywala  } from "../controllers/inventorywala.js";

const router = express.Router();

router.post("/inventorywala", createInventorywala)
router.post("/getinventorywala", getDateOneInventorywala)
router.post("/getallinventorywalas", getDateAllInventorywalas)
export default router