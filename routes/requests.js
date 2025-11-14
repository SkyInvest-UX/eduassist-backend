const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');

router.post('/create', requestController.create);
router.get('/all', requestController.all);
router.post('/status', requestController.updateStatus);

module.exports = router;
