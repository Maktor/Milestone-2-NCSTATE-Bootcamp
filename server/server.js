// Thanks to https://iamtimsmith.com/blog/using-mongodb-with-express-js/ 
//and https://medium.com/geekculture/build-and-deploy-a-web-application-with-react-and-node-js-express-bce2c3cfec32

//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000;

require("dotenv").config();
const path = require("path");

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err));

//Connect the client side
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));

//Mongoose Schema to define username and password
const User = mongoose.model("User", new mongoose.Schema({
  username: String, 
  password: String
}), "users");

//HTTP get to see if the server is running
app.get("/", (req, res) => {
  res.send("server is running");
});

//Function to validate what users enter
function validation(validateData){
  const emptyForm = [];

  if (!validateData.username) {emptyForm.push("username");}
  if (!validateData.password) {emptyForm.push("password");}

  return emptyForm;
}

//Retrieve all user documents
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) { res.status(500).json({ message: "server error" });}
});

//Start the server
app.listen(PORT, () => {console.log(`port ${PORT}`);});