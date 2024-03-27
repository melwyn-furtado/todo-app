const process = require("process");
const express = require("express");

const app = express();

app.use(express.json());
app.use("/api/todo", require("./routes/todo"));

const server = app.listen(7000);

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
