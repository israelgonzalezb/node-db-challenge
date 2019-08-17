const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

// get projects
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to get projects" });
  }
});

// get resources
router.get("/resources", async (req, res) => {
  try {
    const resources = await Projects.findResources();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: "Failed to get resources" });
  }
});

// get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Projects.findTasks();

    if (tasks.length) {
      res.json(tasks);
    } else {
      res.status(404).json({ message: "No tasks found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get  tasks" });
  }
});

// add project
router.post("/", async (req, res) => {
  const projectData = req.body;

  try {
    const project = await Projects.add(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new project" });
  }
});

// add resource
router.post("/resources", async (req, res) => {
  const resourceData = req.body;

  try {
    const resource = await Projects.addResource(resourceData);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new resource" });
  }
});

// add task
router.post("/tasks", async (req, res) => {
  const taskData = req.body;

  try {
    const task = await Projects.addTask(taskData);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new task" });
  }
});

module.exports = router;
