import Inventorywala from "../models/Inventorywala.js";
import { createError } from "../utils/error.js";
import moment from "moment";

export const createInventorywala = async (req,res,next)=>{
  const {date, ...data}= req.body;
  const apiDate = new Date(date)
    try {
      const inventorywala = await Inventorywala.findOne({ store: req.body.store, dateFormat:req.body.dateFormat });
    if (inventorywala) return next(createError(404, "Already submitted "));
        const inventorywalaDoc = await Inventorywala.create({ ...data, date: apiDate});
        res.json(inventorywalaDoc);
      } catch (e) {
        res.status(422).json(e);
      }
}
export const getDateAllInventorywalas = async (req,res,next)=>{
  try {
    const inventorywala = await Inventorywala.find({ dateFormat:req.body.dateFormat });
      res.json(inventorywala);
    } catch (e) {
      res.status(422).json(e);
    }
}
export const getDateOneInventorywala = async (req,res,next)=>{
    try {
      const inventorywala = await Inventorywala.findOne({ dateFormat:req.body.dateFormat, store:req.body.store });
        res.json(inventorywala);
      } catch (e) {
        res.status(422).json(e);
      }
  }