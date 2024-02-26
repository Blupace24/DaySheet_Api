import Daysheet from "../models/Daysheet.js";
import { createError } from "../utils/error.js";

export const createDaysheet = async (req,res,next)=>{
    try {
      const daysheet = await Daysheet.findOne({ store: req.body.store, date:req.body.date });
    if (daysheet) return next(createError(404, "Already submitted "));
        const daysheetDoc = await Daysheet.create(req.body);
        res.json(daysheetDoc);
      } catch (e) {
        res.status(422).json(e);
      }
}
export const findYesterdayDaysheet = async (req,res,next)=>{
  try {
    const daysheet = await Daysheet.findOne({ store: req.body.store, date:req.body.date });
      res.json(daysheet);
    } catch (e) {
      res.status(422).json(e);
    }
}