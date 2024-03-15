import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    pin: {
      type: Number,
      required: true,
      unique:true
    },
    store:{
      type: String,
      required: true,
    },
    person:{
      type: String,
      required: true,
    },
    shop:{
      type: String,
      required: true,
    },
    persons:[
      {
        person:{ type:String}
      }
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Dayuser", UserSchema);
