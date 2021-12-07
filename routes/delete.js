const express = require('express')
const router = express.Router()

// Remove
router.delete('/',(req,res)=>{
    // Unique Key 
    const todoID = req.params.id;
    // Find Document By ID and delete document from record
    db.getDB().collection(collection).findOneAndDelete({_id : db.getPrimaryKey(todoID)},(err,result)=>{
        if(err)
            console.log(err);
        else
            res.json(result);
    });
});

module.exports=router