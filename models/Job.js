const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide the company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide the position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"], //enum: This is a property that ensures the value of a field is restricted to a specific set of values.
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User", //ref: This property is used to define a reference to another schema.
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
