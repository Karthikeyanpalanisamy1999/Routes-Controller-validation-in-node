const express = require('express');
const Postuser = require('../controller/postcontroller');


const router = express.Router();

router.post('/',Postuser)

module.exports = router