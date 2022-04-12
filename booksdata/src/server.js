
const app=require("./index.js");
const express = require("express");
const dotenv=require("dotenv");
const path=require("path");
const cors = require("cors")
dotenv.config({path:path.join(__dirname, './config.env')});

const bookcontroller=require("./controllers/book.controller")
const userController=require("./controllers/user.controller");
const port=process.env.PORT;

const connect=require("./configs/db.js");
app.use(express.json());
app.use(cors())
app.use("",userController);
// app.get("/",userController)
//app.get("/",bookcontroller)

app.get("/signup",(req,res)=>{
    res.send("homepage signup")
})

app.get("/login",(req,res)=>{
    res.send("login")
})


console.log("hello");
app.listen(port,async()=>{
    await connect();
    console.log(`listening on ${port}`)
});