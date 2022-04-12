
const jwt = require('jsonwebtoken');
const User = require('../models/user.model')


const Authenticate= async(req, res, next)=>{

 try{
  const token =req.cookies.jwtoken;
   const verifytoken=jwt.verify(token,process.env.SECRET_KEY);

   const rootuser=await User.findOne({_id:verifytoken._id, "tokens.token":token})

   if( !rootuser){
       res.status(404).json("user not found")
   }

   req.token=token;
   req.rootuser=rootuser;
   req.userID=rootuser._id;
 next();


 } catch(err){
     console.error(err);
     res.status(404).json({err:"something went wrong in authentication"})
 }




};

module.exports=Authenticate;