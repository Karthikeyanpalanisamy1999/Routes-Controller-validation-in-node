const Joi = require('joi')

const validateUser =(data)=>{
    const schema = Joi.object({
        name:Joi.string().required(),
        age:Joi.string().required(),
        address:Joi.object({
            Doorno:Joi.number().required(),
            Street:Joi.string().required(),
            Pincode:Joi.string()
            .length(6)
            .pattern(/^[1-9][0-9]{5}$/)
            .allow(null)
            .optional(),
        }).required(),
        mobile: Joi.string()
        .pattern(/^\d{10}$/)
        .allow(null)
        .optional()
        .messages({
            'string.pattern.base': 'Mobile number must contain exactly 10 digits',
        }),
    });
     return schema.validate(data);
};

module.exports = validateUser;