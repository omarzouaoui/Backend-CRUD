const Model=require("../model/model");

const express=require("express");
const router=express.Router()

//Post Method
router.post("/post",(req,res)=>{
    res.send("Post API")
})
//Get all Method
router.get("/getAll",(req,res)=>{
    res.send("getAll API")
})
//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})
//Update by ID Method
router.patch("Update/:id",(req,res)=>{
    res.send("Update One API")
})
//Delete by ID Method
router.delete("/delete/:id",(req,res)=>{
    res.send("Delete One API")
})


module.exports=router;