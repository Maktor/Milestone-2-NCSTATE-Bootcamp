const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


function validation(validateData){
    const emptyForm = [];
  
    if (!validateData.username) {emptyForm.push("username");}
    if (!validateData.password) {emptyForm.push("password");}
  
    return emptyForm;
}

async function login(req, res) {
    const emptyForm = validation(req.body);
  
    if (emptyForm.length > 0) {
      return res.status(400).json({ message: `Try again! Enter ${emptyForm.join(" and ")}!` });
    }
  
    const { username, password } = req.body;
    console.log("User input:", username, password);
  
    try {
      const user = await User.findOne({ username });
      console.log("Found user in database:", user);
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid username or pass!" });
      }
      res.status(200).json({ message: "successful login" });
    } catch (error) { res.status(500).json({ message: "server error" }); }
  }

  module.exports = (req, res) => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    login(req, res);
};