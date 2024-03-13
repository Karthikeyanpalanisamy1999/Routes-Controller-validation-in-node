const express = require('express');
const controller = require('../controller/getcontroller')

const router = express.Router();

router.get('/',controller.Getuser)
router.get('/:id',controller.Getiddata)

module.exports = router