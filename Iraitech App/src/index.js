const express= require('express')
const mongoose = require('mongoose')
 require('dotenv').config()
 const app = express()
 const multer = require("multer");
const route = require('./routers/route')
const { AppConfig } = require('aws-sdk');
app.use(multer().any())



app.use(express.json())

mongoose.connect("mongodb+srv://Namdev:ACmN3hfYoeNGaVXi@culster1.tpzq2kc.mongodb.net/culster1?retryWrites=true&w=majority",
    // process.env.MONGO_URI,
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



