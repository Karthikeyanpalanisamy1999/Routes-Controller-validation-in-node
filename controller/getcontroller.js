const UseModel = require('../models/Usemodel')


const Getuser = (req,res)=>{
    UseModel.find({})
    .then(use=>res.json(use))
    .catch(err=>res.json(err))
}

module.exports = Getuser