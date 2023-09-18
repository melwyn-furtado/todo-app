const express = require("express");

const app = express();

app.use(express.json());
app.use("/api/todo", require("./routes/todo"));

app.listen(7000);
