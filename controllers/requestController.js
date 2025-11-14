const Request = require('../models/request');

module.exports = {
  create: (req, res) => {
    const { name, email, course, topic } = req.body;
    Request.create(name, email, course, topic, (err) => {
      if (err) return res.status(500).send(err.message);
      res.json({ message: 'Request submitted' });
    });
  },
  all: (req, res) => {
    Request.all((err, rows) => {
      if (err) return res.status(500).send(err.message);
      res.json(rows);
    });
  },
  updateStatus: (req, res) => {
    const { id, status } = req.body;
    Request.updateStatus(id, status, (err) => {
      if (err) return res.status(500).send(err.message);
      res.json({ message: 'Status updated' });
    });
  }
};
