const UseModel = require('../models/Usemodel')

const Deleteuser = (req,res)=>{
    const customerTag = req.params.id
    UseModel.findOneAndDelete({CustomerTag:customerTag})
    .then(customer=>{res.json(customer)
     console.log("Deleted Successfully")})
    .catch(err=>res.json(err))
}

module.exports = Deleteuser;