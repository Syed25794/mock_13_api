const mongoose = require("mongoose");


const playerSchema = new mongoose.Schema({
  "name":String,
  "level":Number,
  "score":Number
});

const Players = mongoose.model("player",playerSchema);

module.exports = Players;
