import Inventorycake from "../models/Inventorycake.js";
import { createError } from "../utils/error.js";
import moment from "moment";

export const createInventorycake = async (req,res,next)=>{
  const {date, ...data}= req.body;
  const apiDate = new Date(date)
    try {
      const inventorycake = await Inventorycake.findOne({ store: req.body.store, dateFormat:req.body.dateFormat });
    if (inventorycake) return next(createError(404, "Already submitted "));
        const inventorycakeDoc = await Inventorycake.create({ ...data, date: apiDate});
        res.json(inventorycakeDoc);
      } catch (e) {
        res.status(422).json(e);
      }
}
export const getDateAllInventorycakes = async (req,res,next)=>{
  try {
    const inventorycake = await Inventorycake.find({ dateFormat:req.body.dateFormat });
      res.json(inventorycake);
    } catch (e) {
      res.status(422).json(e);
    }
}
export const getDateOneInventorycake = async (req,res,next)=>{
    try {
      const inventorycake = await Inventorycake.findOne({ dateFormat:req.body.dateFormat, store:req.body.store });
        res.json(inventorycake);
      } catch (e) {
        res.status(422).json(e);
      }
  }