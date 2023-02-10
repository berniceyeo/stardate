require("dotenv").config();

module.exports = {
  development: {
    username: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    dialect: "postgres",
    port: process.env.RDS_PORT,
  },
};
