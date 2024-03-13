const mongoose = require('mongoose')
const { generateCustomIDs } = require('../Idgenerator/CustomIdGenerator')


const useSchema = new  mongoose.Schema({
    name:String,
    age:String,
    CustomerTag:{
        type:String,
        unique:true
    },
    CustomerId:{
        type:Number,
        unique:true
    },
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

useSchema.pre('save', async function (next) {
    if (!this.CustomerTag) {
        const prefix = 'Customer'
        const seqFieldName = 'CustomerId'

        try {
            const customIDs = await generateCustomIDs(
                prefix,
                'Customer',
                seqFieldName
            )
            this.CustomerTag = customIDs.customIDReference
            this.CustomerId = customIDs.customIDNumber
        } catch (error) {
            console.error('Error generating custom IDs:', error)
            throw error
        }
    }

    next()
})

const UseModel = mongoose.model('customer',useSchema)

module.exports = UseModel;