/* 
Mahdiyar Bahreman:
I forgot how to do this, so I looked it up and the code below was written with help of https://mongoosejs.com/docs/guide.html
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monthlySpendingSchema = new Schema({
    spending: { 
        type: Number, 
        required: true 
    },
  });

  const monthlySpending = mongoose.model("MonthlySpending", monthlySpendingSchema);

  module.exports = monthlySpending;