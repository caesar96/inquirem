//Using postgresql
const { Pool, Client } = require('pg');
const dbConfig = require(_DATABASE_ + 'dbConfig');
let dbManager = null;
let config = null;


config = process.env.DYNO ? {connectionString: process.env.DATABASE_URL} : dbConfig.settings;
if (dbConfig.pool) {
    dbManager = new Pool(config);
}
else {
    dbManager = new Client(config);
}

module.exports = dbManager;