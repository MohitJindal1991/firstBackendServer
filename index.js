require('dotenv').config();
const express = require('express');
//import express from 'express'
const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/twitter',(req,res)=>{
   res.send("welcome to twitter page")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Welcome to login page</h1>')
})

app.get('/chai',(req,res)=>{
    res.send("<h2>Welcome to chai aur code youtube channel</h2>");
})
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${port}`);
})