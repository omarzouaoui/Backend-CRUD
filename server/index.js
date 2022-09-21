//routes
const routes=require("./routes/routes")

const express=require('express');
const mongoose=require('mongoose')

const app=express()

app.use(express.json())
app.use("/api",routes)

//connecting mongo DB
require('dotenv').config();
const mongoString=process.env.DATABASE_URL
mongoose.connect(mongoString);
const database=mongoose.connection

database.on('error',(error)=>{
    console.log(error);
})

database.once('connected',()=>{
    console.log('Database connected');
})

//listen PORT
app.listen(3000,()=>{
    console.log(`Server Started at ${3000}`);
})