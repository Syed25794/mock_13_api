const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
  company: { type: String },
  postedAt: { type: String },
  city: { type: String },
  location: { type: String },
  role: { type: String },
  level: { type: String },
  position: { type: String },
  language: { type: String },
  contract: { type: String },
});

const Jobs = mongoose.model("job", jobsSchema);

module.exports = Jobs;
