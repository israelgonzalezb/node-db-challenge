const db = require("../data/db-config.js");

module.exports = {
  find,
  findTasks,
  findResources,
  add,
  addResource,
  addTask
};

function find() {
  return db("projects");
}

function findResources() {
  return db("resources");
}

function findTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .select(
      "p.project_name",
      "p.description",
      "t.id",
      "t.description",
      "t.completed",
      "t.notes"
    )
    .orderBy("p.id");
}

function add(project) {
  const [newProjectId] = db("projects").insert(project);
  return newProjectID;
}

function addResource(resource) {
  const [newResourceId] = db("resources").insert(resource);
  return newResourceId;
}

function addTask(task) {
  const [newTaskId] = db("tasks").inser(task);
  return newTaskId;
}
