const express= require('express')
const mongoose = require('mongoose')
 require('dotenv').config()
 const app = express()
 const multer = require("multer");
const route = require('./routes/route.js')
const { AppConfig } = require('aws-sdk');
app.use(multer().any())



app.use(express.json())

mongoose.connect(
    process.env.MONGO_URI,
{
  useNewUrlParser:true
})
.then(() => 
console.log("MongoDB is connected"))
.catch((err) => console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 3000, ()=>{
    console.log("port is listening on " + (process.env.PORT || 3000))
})



