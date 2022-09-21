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
router.get('/getOne/:id', async(req, res) => {
    try{
        const data=await Model.findById(req.params.id);
        res.json(data)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
//Delete by ID Method
router.delete("/delete/:id", async (req,res)=>{
    try{
        const id=req.params.id;
        const data= await Model.findOneAndDelete(id)
        res.send(`Document with ${data.name} has been deleted...`)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})


module.exports=router;