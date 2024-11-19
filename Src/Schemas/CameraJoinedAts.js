const { Schema, model } = require("mongoose");
const schema = Schema({
  userID: { type: String, default: "" },
  date: { type: Number, default: 0 },
});
module.exports = model("cameraJoinedAt", schema);