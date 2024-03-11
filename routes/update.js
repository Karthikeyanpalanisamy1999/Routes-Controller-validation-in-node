const express = require('express');
const Update = require('../controller/updatecontroller');

const router = express.Router();

router.put('/:id',Update)

module.exports = router