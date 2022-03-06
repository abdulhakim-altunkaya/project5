const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const inputSchema = new Schema({
  inputText: {
    type: String
  }
});
const ModelInput = mongoose.model("inputdoc", inputSchema);
module.exports = ModelInput;
