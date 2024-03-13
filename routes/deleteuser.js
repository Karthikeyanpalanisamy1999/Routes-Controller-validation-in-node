const express =require('express');
const Deleteuser = require('../controller/deletecontroller');


const router = express.Router();

router.delete('/:id',Deleteuser)

module.exports = router