const express = require('express');
const controller = require('../controller/postcontroller')


const router = express.Router();

router.post('/',controller.Postuser);
router.post('/books',controller.BookPostuser)

module.exports = router