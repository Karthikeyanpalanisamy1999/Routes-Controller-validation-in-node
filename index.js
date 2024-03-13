const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const getroute = require('./routes/getuser')
const postroute = require('./routes/postuser')
const updateroute = require('./routes/update')
const deletedata = require('./routes/deleteuser')
const app = express();
const  dotenv = require('dotenv')
const config = require('./Config/mongoose')
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(config.mongodburi,{})
const db = mongoose.connection
db.on('error', (err) => {
    console.error('Connection error:', err)
})
db.once('open', () => {
    console.log('Successfully connected to MongoDB')
})

app.use('/get',getroute)
app.use('/post',postroute)
app.use('/update',updateroute)
app.use('/delete',deletedata)

app.listen(config.port,config.hostname,()=>{
    console.log(`server is running on http://${config.hostname}:${config.port}`)
})