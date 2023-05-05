const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

function validation(validateData){
    const emptyForm = [];
  
    if (!validateData.username) {emptyForm.push("username");}
    if (!validateData.password) {emptyForm.push("password");}
  
    return emptyForm;
}

async function register(req, res) {
  //uses the validation function above
  const emptyForm = validation(req.body);

  //checks if registration form is empty or not
  if (emptyForm.length > 0) {
    return res.status(400).json({ message: `Try again! Enter ${emptyForm.join(" and ")}!` });
  }

  const { username, password} = req.body;
  console.log("Registration user input:", username, password);

  try {
    const existingUser = await User.findOne({username});
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken!" });
    } else {
      const newUser = new User({username, password});
      console.log(newUser)
      await newUser.save();
    
      res.status(201).json({
        message: "registration successful"});
    }
    
  } catch (error) {
    console.log("The error:", error)
    res.status(500).json({message: error});
  }
}

module.exports = (req, res) => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    register(req, res);
  };