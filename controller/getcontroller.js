const UseModel = require('../models/Usemodel')


const Getuser = (req,res)=>{
    UseModel.find({})
    .then(customer=>{res.json(customer)
    console.log("All records are Displayed")})
    .catch(err=>res.json(err))
}

const Getiddata = (req,res)=>{
    const customerTag = req.params.id
    UseModel.findOne({CustomerTag:customerTag})
    .then(customer=>{res.json(customer)
    console.log("Find the data")})
    .catch(err=>res.json(err))
}
module.exports = {
    Getuser,Getiddata
}