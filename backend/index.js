const express = require('express');
const mongoose =require('mongoose');
const { route } = require('./routes');
 const  app = express();

mongoose.connect("mongodb://localhost/todo_express",{
    useNewUrlParser :true,
    useUnifiedTopology:true
})
//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use(express.static("./../iitk_cycling/public"));
app.set("view engine","ejs");
//routes
app.

app.use(express)
 app.listen(3000,()=>console.log("server stared"));