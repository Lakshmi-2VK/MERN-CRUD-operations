
const express= require("express");
const mongoose= require("mongoose");
const studentRoute= require("./controller/studentRoute");
const bodyParser=require("body-parser");
const cors =require("cors");
const app= express();
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:Lakshmi%40123@cluster0.4moohoa.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>console.log("connected to db!!"));
db.on("error",()=>console.log("error occured!!"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute", studentRoute);
app.listen(4000,()=>{
    console.log("Server started at 4000");
})