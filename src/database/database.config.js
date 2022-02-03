const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.userbd || 'mknvgzphefxnep',
    host: process.env.hostbd || 'ec2-34-227-120-94.compute-1.amazonaws.com',
    password: process.env.passwordbd ||'633f5833e8e223d0ff2d62f69dd721efc355dc502391abcc68757414b8633234',
    database: process.env.databasebd ||'d3vmfeep32u6ko',
    port: process.env.port ||5432
});
module.exports = {
    pool
  }