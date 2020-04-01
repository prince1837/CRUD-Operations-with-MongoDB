const express=require('express')
const axios=require('axios')
const dotenv=require('dotenv').config()
const port = process.env.port

const app=express()  
app.use(express.json())


var my_data=require('./database/database.js')


var inserting= express.Router()
app.use("/",inserting)
require("./Router/Insert")(my_data,inserting)


var getting= express.Router()
app.use("/",getting)
require('./Router/getting')(my_data,getting)

var Deleting= express.Router()
app.use("/",Deleting)
require('./Router/delete')(my_data,Deleting)


var updating=express.Router()
app.use('/',updating)
require('./Router/update')(my_data,updating)
   

app.listen(port,function(){
    console.log('your server is working on port no.. ',port)
})