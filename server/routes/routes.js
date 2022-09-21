const Model=require('../model/model');

const express=require("express");
const router=express.Router()


//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
//Get all Method
router.get("/getAll", async(req,res)=>{
    try{
        const data=await Model.find();
        res.json(data)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
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