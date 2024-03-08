import Dayuser from "../models/Dayuser.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await Dayuser.findOne({ email: req.body.email });
    if (user) return next(createError(404, "User already Exist"));
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new Dayuser({
      email:req.body.email,
      password: hash,
      store:req.body.store,
      persons:req.body.persons
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await Dayuser.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or email!"));
    const { _id, email, store, persons } = user._doc;
    res
      .status(200)
      .json({ details: { _id, email, store, persons}}, );
  } catch (err) {
    next(err);
  }
};

export const pinVerification = async (req, res, next) => {
    try {
      const user = await Dayuser.findOne({ store: req.body.store });
      if (!user) return next(createError(404, "User not found!"));
  
      const { store, persons } = user._doc;
      const isPinCorrect = persons.find(person => person.pin === req.body.pin);

      if (!isPinCorrect)
      return next(createError(400, "Wrong pin"));
      res
      .status(200)
      .json({ details: { store, person:isPinCorrect}}, );
    }
    catch(err){
        next(err);
    }
  };

