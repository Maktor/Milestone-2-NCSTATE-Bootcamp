/* 
Mahdiyar Bahreman:
I forgot how to do this, so I looked it up and the code below was written with help of https://mongoosejs.com/docs/guide.html
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payDayInfoSchema = new Schema({
    spending: { 
        type: Date, 
        required: true 
    },
  });

  const payDay = mongoose.model("payDay", payDayInfoSchema);

  module.exports = payDay;