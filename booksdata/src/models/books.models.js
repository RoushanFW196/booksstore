
const mongoose = require('mongoose');


const booksSchema= new mongoose.Schema({

  name:{type:"string",required:"true"},
  author:{type:"string",required:"true"},
  price:{type:Number,required:"true"},
  page:{type:Number,required:"true"},
  rating:{type:Number,required:"true"},
  image:{type:String,required:"true"},description:{type:"string",required:"true"}


},{
    versionKey:false,
    timestamps:true,
});


const Books=mongoose.model('Book',booksSchema);
module.exports = Books;