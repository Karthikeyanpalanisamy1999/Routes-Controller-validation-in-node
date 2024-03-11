const mongoose = require('mongoose')

const useSchema = new  mongoose.Schema({
    name:String,
    age:String,
    address:{
        Doorno:{
            type:Number,
            required:true
             },
        Street:
            {
                type:String,
                required:true
            },
        Pincode:{
            type:String,
            required:true
        }
        },
        mobile:{
            type:String,
            require:true
        }
    }
)

const UseModel = mongoose.model('use',useSchema)

module.exports = UseModel;