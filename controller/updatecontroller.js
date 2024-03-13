const UseModel = require('../models/Usemodel')

const Update = (req,res)=>{
    const customerTag = req.params.id
    UseModel.findOneAndUpdate({CustomerTag:customerTag},{
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        mobile:req.body.mobile

    })
    .then(customer=>{res.json(customer)
     console.log('Updated successfully')})
    .catch(err=>res.json(err))
}

module.exports = Update;