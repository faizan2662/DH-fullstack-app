const express = require('express');
const router = express.Router();
const { cache } = require('../middleware/cache');
const { getUser } = require('../controllers/userController');

router.get('/:id', cache, getUser);

module.exports = router;
