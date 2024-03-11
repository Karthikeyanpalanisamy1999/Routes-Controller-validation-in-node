const UseModel = require('../models/Usemodel');
const validateUser = require('../validator/Uservalidation')

const Postuser = (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    UseModel.create(req.body)
        .then(use => res.json(use))
        .catch(err => res.json(err));
};


module.exports = Postuser