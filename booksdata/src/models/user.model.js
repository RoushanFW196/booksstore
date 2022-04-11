
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({

    name:{type:"string",required:"true"},
    email:{type:"string",required:"true"},
    mobile:{type:String,required:"true"},
    password:{type:"string",required:"true"},
    cpassword:{type:"string",required:"true"},

    city:{type:"string",required:"true"},
    pincode:{type:String,required:"true"},
    state:{type:"string",required:"true"},
    country:{type:"string",required:"true"},
    tokens:[
        {
            token:{type:"string",required:"true"}
        }
    ]




},{
    versionKey:false,
    timestamps:true,
});






userSchema.pre("save", async function(next){
 console.log("password hashed")
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password,10);
        this.cpassword= await bcrypt.hash(this.cpassword,10);
    }
    next();
});


userSchema.methods.generateAuthToken = async function(){

    try{
        let generatedtoken =jwt.sign({_id:this._id},process.env.SECRET_KEY)
      this.tokens=this.tokens.concat({token:generatedtoken});
    
      await this.save();
      return generatedtoken;
    }
    catch(err){
        console.error(err);
    }
}   






const User=mongoose.model("user",userSchema);
module.exports = User;


