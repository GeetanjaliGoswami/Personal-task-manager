const express = require("express");
const { v4: uuidv4 } = require("uuid");

const {
  readTasks,
  writeTasks,
} = require("../utils/fileHelpers");

const router = express.Router();


// GET ALL TASKS
router.get("/", (req, res) => {
  const tasks = readTasks();

  tasks.sort(
    (a, b) =>
      new Date(b.createdAt) -
      new Date(a.createdAt)
  );

  res.json(tasks);
});


// CREATE TASK
router.post("/", (req, res) => {
  const { title, description, dueDate } =
    req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const tasks = readTasks();

  const newTask = {
    id: uuidv4(),
    title,
    description: description || "",
    dueDate: dueDate || null,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  writeTasks(tasks);

  res.status(201).json(newTask);
});


// REORDER TASKS
router.put("/reorder", (req, res) => {
  const { tasks } = req.body;

  if (!tasks) {
    return res.status(400).json({
      message: "Tasks array required",
    });
  }

  writeTasks(tasks);

  res.json({
    message: "Tasks reordered",
  });
});


// UPDATE TASK
router.put("/:id", (req, res) => {
  const tasks = readTasks();

  const task = tasks.find(
    (t) => t.id === req.params.id
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const {
    title,
    description,
    dueDate,
  } = req.body;

  task.title = title;
  task.description = description;
  task.dueDate = dueDate;

  writeTasks(tasks);

  res.json(task);
});


// TOGGLE TASK
router.patch("/:id/toggle", (req, res) => {
  const tasks = readTasks();

  const task = tasks.find(
    (t) => t.id === req.params.id
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  task.completed = !task.completed;

  writeTasks(tasks);

  res.json(task);
});


// DELETE TASK
router.delete("/:id", (req, res) => {
  const tasks = readTasks();

  const filteredTasks = tasks.filter(
    (t) => t.id !== req.params.id
  );

  writeTasks(filteredTasks);

  res.json({
    message: "Task deleted",
  });
});

module.exports = router;