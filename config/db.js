const { Client } = require("pg");

const client = new Client({
  user: "todo",
  host: "localhost",
  database: "todo",
  password: "todo",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected to DB Successfully!!!"))
  .catch((error) => console.error(error));

module.exports = client;
