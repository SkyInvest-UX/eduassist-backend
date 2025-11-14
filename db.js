const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./eduassist.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    course TEXT,
    topic TEXT,
    status TEXT
  )`);
});

module.exports = db;
