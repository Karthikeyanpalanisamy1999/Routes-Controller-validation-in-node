const express = require('express');
const Getiddata = require('../controller/getidcontroller');

const router = express.Router();

router.get('/:id',Getiddata)

module.exports = router