import Daysheet from "../models/Daysheet.js";

export const createDaysheet = async (req,res,next)=>{
    try {
        const daysheetDoc = await Daysheet.create(req.body);
        res.json(daysheetDoc);
      } catch (e) {
        res.status(422).json(e);
      }
}