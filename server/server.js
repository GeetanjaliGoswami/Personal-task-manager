const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/tasks");

const app = express();

app.use(cors());
app.use(express.json());


// Root Route
app.get("/", (req, res) => {
  res.json({
    message: "Personal Task Manager API Running",
  });
});


// Test Route
app.get("/api/test", (req, res) => {
  res.json({
    message: "Test route works",
  });
});


// Task Routes
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});