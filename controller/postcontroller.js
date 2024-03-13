const BookModel = require('../models/Bookmodel');
const UseModel = require('../models/Usemodel');
const validateUser = require('../validator/Uservalidation')

const Postuser = (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    UseModel.create(req.body)
        .then(customer => {res.json(customer)
        console.log("Posted Successfully")})
        .catch(err => res.json(err));
};
const BookPostuser = (req, res) => {
   
    BookModel.create(req.body)
        .then(Book => {res.json(Book)
        console.log("Posted Successfully")})
        .catch(err => res.json(err));
};



module.exports = {
    Postuser,
    BookPostuser
} 