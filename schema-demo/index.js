const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/schemaDemo")
.then(() => {
  console.log("Database Connected");
})
.catch((err) => {
  console.log(err);
});

// Create Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create Model
const User = mongoose.model("User", userSchema);

// Insert Data
const newUser = new User({
  name: "Judy",
  email: "judy@gmail.com",
  age: 20
});

newUser.save()
.then(() => {
  console.log("Data Inserted Successfully");
})
.catch((err) => {
  console.log(err);
});

// Fetch Data
User.find()
.then((users) => {
  console.log("Fetched Data:");
  console.log(users);
})
.catch((err) => {
  console.log(err);
});