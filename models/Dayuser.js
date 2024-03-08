import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    store:{
      type: String,
    },
    persons:[{
      pin:Number,
      name:String,
    }]
  },
  { timestamps: true }
);

export default mongoose.model("Dayuser", UserSchema);
