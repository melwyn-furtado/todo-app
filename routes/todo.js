const express = require("express");
const {
  getHealth,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();
router.route("/healthz").get(getHealth);
router.route("/").get(getTodos).post(createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
