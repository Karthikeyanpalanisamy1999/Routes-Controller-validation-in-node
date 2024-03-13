const dotenv = require('dotenv')

dotenv.config();

const config = {
    hostname:process.env.HOST || 'localhost',
    port:process.env.PORT || 5000,
    mongodburi:process.env.MONGO_URI || 'mongodb://localhost:27017/Library'
}

module.exports = config