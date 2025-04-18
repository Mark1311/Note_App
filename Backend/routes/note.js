import express from 'express'
import Note from '../models/Notes'

const router = express.Router()

router.post('./add', async (req, res)=>{
    try{
        const { title, description } = req.body;
        
        const newNote = new Note({
            title, description
        });

        await newUser.save()
        return res.status(200).json({success: true, message: "Account Create"})

    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({success: false, message: "Error in Adding User"})
    }
})

export default router;