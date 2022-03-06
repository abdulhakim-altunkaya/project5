const mongoose = require ("mongoose");
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const url = "mongodb+srv://schwan123:123456--..@cluster0.vk9cp.mongodb.net/test"

const connectDB = async () => {
  try {
    await mongoose.connect(url, connectionParams);
    console.log("successfully connected")
  } catch (e) {
    console.log("Maybe you dont have internet connection. Or maybe you typed db url wrong.");
  }
};

module.exports = connectDB;
