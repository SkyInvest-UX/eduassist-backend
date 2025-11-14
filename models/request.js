const db = require('../db');

module.exports = {
  create: (name, email, course, topic, cb) => {
    db.run(
      'INSERT INTO requests (name, email, course, topic, status) VALUES (?, ?, ?, ?, ?)',
      [name, email, course, topic, 'pending'],
      cb
    );
  },
  all: (cb) => {
    db.all('SELECT * FROM requests', cb);
  },
  updateStatus: (id, status, cb) => {
    db.run('UPDATE requests SET status = ? WHERE id = ?', [status, id], cb);
  }
};
