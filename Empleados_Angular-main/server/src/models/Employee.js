const { Schema, model } = require("mongoose");

const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  office: { type: String, default: "" },
  position: { type: String, required: true },
  salary: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = model("Employee", EmployeeSchema);