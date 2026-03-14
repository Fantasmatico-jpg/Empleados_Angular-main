const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/employees", require("./routes/employees.routes"));

module.exports = app;


