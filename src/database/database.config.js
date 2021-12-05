const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.userbd || 'postgres',
    host: process.env.hostbd || 'localhost',
    password: process.env.passwordbd ||'11111',
    database: process.env.databasebd ||'ovaDataBase',
    port: process.env.port ||5432
});
module.exports = {
    pool
  }