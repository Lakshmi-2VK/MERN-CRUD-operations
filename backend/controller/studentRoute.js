const express = require("express"); 
const studentSchema = require("../model/studentSchema");
const studentRoute = express. Router();
const mongoose= require("mongoose");
//studentRoute.post() 

studentRoute.post("/create-student", (req, res)=>{ 
    studentSchema.create(req.body, (err, data) => {
        if (err)
        return err;
        else
        res.json(data);
    })
})

studentRoute.get("/", (req, res)=>{
    studentSchema.find((err, data)=>{
    if(err)
        return err;
    else
        res.json(data);
    })
})


studentRoute.route("/update-student")
.get((req,res)=>{
    studentSchema.find(mongoose.Types.ObjectId(req.params.id),(err, data)=>{
    if (err)
        return err;
    else
        res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set: req.body},
    (err, data)=>{
    if (err)
        return err;
    else
        res.json(data);
    })
}) 
//653e48dee06d15db8584553f studentRoute.delete() 
studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove (mongoose.Types.ObjectId(req.params.id),(err, data)=>{
        if (err)
            return err;
        else
            res.json(data);
    })
})
module.exports = studentRoute;