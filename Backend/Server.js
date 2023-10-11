const express = require("express");
const mongoose = require("mongoose");

const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyparser.json());

mongoose.connect("mongodb://127.0.0.1:27017/User");
const userSchema = new mongoose.Schema({
  username: String,
  email:String,
  password: String,
});

const user = mongoose.model("User", userSchema);

app.post("/api/Signup", async (req, res) => {
  try {
    const { username, email , password } = req.body;
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);

    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new user({ username,email, password: hashedpassword });
    await newUser.save();
    res.status(201).json({ message: "User Signup successfull" });
  } catch (error) {
    res.status(500).json({ error: "an error occured in Signup page" });
  }
});

const contactSchema = new mongoose.Schema({
  username: String,
  email:String,
  subject: String,
  message:String,
});

const contact = mongoose.model("Contact", contactSchema);

app.post("/api/contact", async (req, res) => {
  try {
    const { username, email ,subject,message } = req.body;
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.subject);
    console.log(req.body.message);

    const newCon = new contact({ username,email,subject,message});
    await newCon.save();
    res.status(201).json({ message: "Details submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "an error occured in contact page" });
  }
});


const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});