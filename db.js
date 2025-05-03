// db.js - Database connection configuration
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER || 'your_db_user',
  host: process.env.PG_HOST || 'localhost',
  database: process.env.PG_DATABASE || 'your_db_name',
  password: process.env.PG_PASSWORD || 'your_db_password',
  port: process.env.PG_PORT || 5432,
});

module.exports = pool;