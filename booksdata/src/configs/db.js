
const mongoose =require('mongoose');
const path= require('path');
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname, './config.env')});
const DB=process.env.DATABASE
module.exports = async()=>{
    mongoose.connect(DB)
}