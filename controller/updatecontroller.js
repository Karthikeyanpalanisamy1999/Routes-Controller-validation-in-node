const UseModel = require('../models/Usemodel')

const Update = (req,res)=>{
    const id = req.params.id
    UseModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        age:req.body.age
    })
    .then(use=>{res.json(use)
     console.log('Updated successfully')})
    .catch(err=>res.json(err))
}

module.exports = Update;