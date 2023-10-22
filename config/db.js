const { Client } = require("pg");

const client = new Client({
  user: process.env.POSTGRES_USER ?? "user",
  host: "host.docker.internal",
  database: process.env.POSTGRES_DB ?? "user",
  password: process.env.POSTGRES_PASSWORD ?? "password",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected to DB Successfully!!!"))
  .catch((error) => console.error(error));

module.exports = client;
