const express = require("express");
const app = express();
const { connection } = require("./configs/db");
const { StudentModel } = require("./models/student.model");

app.use(express.json());
app.use(require("cors")());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Working" });
});

// add student
app.post("/student", async (req, res) => {
  try {
    const payload = req.body;

    const studentInstance = new StudentModel(payload);

    await studentInstance.save();

    res
      .status(201)
      .json({ message: "Student added", student: studentInstance });
  } catch (error) {
    console.log("Error adding student =>", error);
    res
      .status(500)
      .json({ error: "Something went wrong, Please try again later." });
  }
});

// get students
app.get("/student", async (req, res) => {
  try {
    const students = await StudentModel.find();

    if (students.length === 0)
      return res.status(404).json({ message: "Students not found!" });

    res.status(200).json(students);
  } catch (error) {
    console.log("Error fetching students =>", error);
    res
      .status(500)
      .json({ error: "Something went wrong, Please try again later." });
  }
});

app.listen(1210, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log("Server is listening on ", 1210);
  } catch (error) {
    console.log("Something went wrong", error);
  }
});
