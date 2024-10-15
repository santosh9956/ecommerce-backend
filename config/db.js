const mongoose = require("mongoose");

const dbConnect = async () => {
  const url =
    process.env.MONGO_URI ||
    "mongodb+srv://santoshmandal:Admin@student1.sqhwj.mongodb.net/ecommerce?retryWrites=true&w=majority";
  try {
    await mongoose.connect(url);
    console.log("mongo connected");
  } catch (error) {
    console.log("Mongo not connected!", error.message);
  }
};

dbConnect();

module.exports = mongoose;
