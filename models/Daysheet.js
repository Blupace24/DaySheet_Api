import mongoose from "mongoose";
const DaysheetSchema = new mongoose.Schema(
  {
    
    store:{ type: String,required:true},
    date:{type:String,required:true},
    n50:{type:Number, required:true,default:0},
    n20:{type:Number, required:true,default:0},
    n10:{type:Number, required:true,default:0},
    n5:{type:Number, required:true,default:0},
    n2:{type:Number, required:true,default:0},
    n1:{type:Number, required:true,default:0},
    n50p:{type:Number, required:true,default:0},
    n20p:{type:Number, required:true,default:0},
    nbrons:{type:Number, required:true,default:0},
    n50t:{type:Number, required:true,default:0},
    n20t:{type:Number, required:true,default:0},
    n10t:{type:Number, required:true,default:0},
    n5t:{type:Number, required:true,default:0},
    n2t:{type:Number, required:true,default:0},
    n1t:{type:Number, required:true,default:0},
    n50pt:{type:Number, required:true,default:0},
    n20pt:{type:Number, required:true,default:0},
    nbronst:{type:String, required:true,default:"£0.00"},
    subtotal:{type:String, required:true},
    yesfloat:{type:String, required:true},
    todayfloat:{type:String, required:true},
    cash:{type:String, required:true},
    card:{type:String, required:true},
    actualsales:{type:String, required:true},
   zscale:{type:String, required:true},
  diff:{type:String, required:true},
  pettycash:{type:String, required:true},
  cashmanag:{type:String, required:true},
  handcash:{type:String, required:true},
    
 
  },
  { timestamps: true }
);

export default mongoose.model("Daysheet", DaysheetSchema)
