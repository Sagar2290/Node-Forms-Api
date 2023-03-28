const sql = require("mssql");

const pool = new sql.ConnectionPool({
  user: "sa",
  password: "sihl$123",
  server: "192.168.200.5",
  database: "UserRegistrationDB",
  trustServerCertificate: true,
});

module.exports = pool;
