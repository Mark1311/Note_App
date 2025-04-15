import express from 'express';
import User from '../models/User.js'
import bcrypt from 'bcrypt';

const router = express.Router()

router.post('/register', async(req, res) =>{
    try{
        const {name, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({success: false, message: "User Alredy Available"})
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name, email, password: hashPassword
        });

        await newUser.save()
        return res.status(200).json({success: true, message: "Account Create"})

    }
    catch{
        console.log(error.message)
        return res.status(500).json({success: false, message: "Error in Adding User"})


    }

})

export default router;