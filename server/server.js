// Mahdiyar Bahreman: https://iamtimsmith.com/blog/using-mongodb-with-express-js/ and https://dev.to/kjdowns/building-a-basic-api-using-express-node-and-mongodb-160f ahelped to set up connection to MongoDB

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

// Connecting to MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Success! MongoDB is connected!");
});

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});