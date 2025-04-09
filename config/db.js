const Mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connectionDB = await Mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB is connected: ${connectionDB.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;