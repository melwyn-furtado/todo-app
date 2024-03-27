const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER ?? "user",
  host: process.env.POSTGRES_HOST ?? "localhost",
  database: process.env.POSTGRES_DB ?? "user",
  password: process.env.POSTGRES_PASSWORD ?? "password",
  port: 5432,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
});

module.exports = pool;
