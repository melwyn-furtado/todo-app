const asyncHandler = require("express-async-handler");
const pool = require("../config/db");

const getHealth = asyncHandler(async (req, res) => {
  res.status(200).send();
});

const getTodos = asyncHandler(async (req, res) => {
  const queryString = "SELECT * from todos";
  const { rows } = await pool.query(queryString);
  res.status(200).json(rows);
});

const createTodo = asyncHandler(async (req, res) => {
  const { note } = req.body;
  if (!note) {
    res.status(400);
    throw new Error("Please add a todo");
  }

  const queryString = "INSERT INTO todos (note) VALUES ($1) RETURNING *";
  const { rows } = await pool.query(queryString, [note]);
  res.status(200).json(rows);
});

const updateTodo = asyncHandler(async (req, res) => {
  const { note, done } = req.body;
  const { id } = req.params;
  if (!note) {
    res.status(400);
    throw new Error("Please add a todo");
  }

  const queryString =
    "UPDATE todos SET note = $1, done = $2 WHERE id = $3 RETURNING *";
  const { rows } = await pool.query(queryString, [note, done, id]);
  res.status(200).json(rows);
});

const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const queryString = "DELETE FROM todos WHERE id = $1 RETURNING *";
  await pool.query(queryString, [id]);
  res.status(200).json({ msg: "Todo deleted successfully" });
});

module.exports = {
  getHealth,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
