import Daysheet from "../models/Daysheet.js";
import { createError } from "../utils/error.js";
import moment from "moment";

export const createDaysheet = async (req,res,next)=>{
  const {date, ...data}= req.body;
  const apiDate = new Date(date)
    try {
      const daysheet = await Daysheet.findOne({ store: req.body.store, dateFormat:req.body.dateFormat });
    if (daysheet) return next(createError(404, "Already submitted "));
        const daysheetDoc = await Daysheet.create({ ...data, date: apiDate});
        res.json(daysheetDoc);
      } catch (e) {
        res.status(422).json(e);
      }
}
export const findYesterdayDaysheet = async (req,res,next)=>{
  try {
    const daysheet = await Daysheet.findOne({ store: req.body.store, dateFormat:req.body.dateFormat });
      res.json(daysheet);
    } catch (e) {
      res.status(422).json(e);
    }
}
export const getAllDaysheets = async (req,res,next)=>{
  try {
    const daysheets = await Daysheet.find({});
      res.json(daysheets);
    } catch (e) {
      res.status(422).json(e);
    }
}
export const updateDaysheetVerification = async (req,res,next)=>{
  try {
    const updatedDaysheet = await Daysheet.findByIdAndUpdate(
      req.body.id,
     { $set: { verified: req.body.verified, comment:req.body.comment, isSubmitted:true} },
      { new: true }
    );
    res.status(200).json(updatedDaysheet);
    } catch (e) {
      res.status(422).json(e);
    }
}
export const getLast7Daysheet = async (req,res,next)=>{
  try {
    const startDate = new Date(req.body.startdate)
    const endDate = new Date(req.body.enddate)
    const data = await Daysheet.find({ date: { $gte: startDate, $lte: endDate }, store:req.body.store }).exec();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}