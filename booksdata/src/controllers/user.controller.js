
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express=require('express');
const User=require("../models/user.model")
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("hello from router controler user")
});


router.post("/register",async(req,res)=>{
    console.log(req.body)
//   const{name,email,mobile,password,cpassword,city,pin,state ,country}=req.body
  
//   if(!name || !email || !mobile || !password || !cpassword || !city || !pincode ||!state|| !country){
//     return  res.status(404).json({err:"please filled carefully"})
//   }

  try{

 const userExist= await  User.findOne({email:email});

 
 if(userExist){
    return res.status(404).json({err:"user already registered"})
}else if(password !==cpassword){
    return res.status(404).json({err:"password not matching"})
 }else{

const newuser=new User({name,email,mobile,password,cpassword,city,pin,state,country})
    
 
await newuser.save();
res.status(201).json({message:"user successfully registered"})

 }

  }catch(err){
      res.status(404).json({err:"something went wrong"})
  }
});





router.post("/signin",async (req,res)=>{
   const {email,password}=req.body
  
   try{

    if(!email || !password){
     return res.status(404).json({err:"please filled the data"})
    }
     
    const userlogin= await User.findOne({email:email});

    if(userlogin){

        const ismatch =await bcrypt.compare(password,userlogin.password)
    
        let token = await userlogin.generateAuthToken();

 console.log(token)

    res.cookie("jwtoken",token,{
        expires: new Date(Date.now()+2500000451),
        httpOnly: true
    });



        if(!ismatch){
            res.status(404).json({err:"invalid credentials"})
        }
       else{
           res.status(200).json({message:"signin succesfull"})
       }

    }else{
        res.status(404).json({err:"invalid credentials"})
    }
      console.log(userlogin)
   }catch(err){
       res.status(404).json({err:"something went wrong"})
   }



})















module.exports = router;




// "name":"rohan",
// "email":"rosh@gmail.com",
// "mobile":987465123315,
//  "password":"as551ss"
// "cpassword":"as551ss",
// "city":"biharsh",
// "pin":4515221,
// "state":"nbsnsa",
// "country":"india"