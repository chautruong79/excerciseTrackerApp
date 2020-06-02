const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, required: true },
    note: String,
    isSaved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;
