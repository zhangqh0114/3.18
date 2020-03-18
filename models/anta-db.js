//schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//创建一个模型
const antaSchema = new Schema(
  {
    pid:{
      type:Number,
      required:true//必填项
    },
    pname: {
      type: String, 
      default:"anta",//默认anta
      
    },
    pprice: {
      type: Number,
      required: true 
    },
    pdesc: {
      type: String,
      required: true 
    }
  },
  // {
  //   timestamps: true //时间戳
  // }
);
const Product = mongoose.model("anta", antaSchema);
module.exports = Product;
