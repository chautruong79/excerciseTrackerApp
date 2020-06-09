const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/assignmentDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
mongoose.set("useCreateIndex", true);

const assignmentRouter = require("./routes/assignments");

app.use("/assignments", assignmentRouter);

// const savedAssignmentRouter = require("./routes/saved");

// app.use("/saved", savedAssignmentRouter);
app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
