const UseModel = require('../models/Usemodel')

const Getiddata = (req,res)=>{
    const id = req.params.id
    UseModel.findById({_id:id})
    .then(use=>res.json(use))
    .catch(err=>res.json(err))
}

module.exports = Getiddata;