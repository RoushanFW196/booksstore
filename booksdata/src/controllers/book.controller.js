
const express=require('express');
const router=express.Router();
const Books=require('../models/books.models.js');



router.get('/',(req,res)=>{
    res.send("books from router controller")
})


module.exports = router;