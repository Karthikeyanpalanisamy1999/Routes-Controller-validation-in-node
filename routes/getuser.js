const express = require('express');
const Getuser = require('../controller/getcontroller');

const router = express.Router();

router.get('/',Getuser)

module.exports = router