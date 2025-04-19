import express from 'express';
import User from '../models/User.js'
import Note from '../models/Note.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', async(req, res) =>{
    try{
        const { name, email, password } = req.body;
        console.log("Incoming Data:", req.body);
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
    catch(error){
        console.log(error.message)
        return res.status(500).json({success: false, message: "Error in Adding User"})
    }

})

router.post('/login', async(req, res) =>{
    try{
        const { email, password } = req.body;
        console.log("Incoming Data:", req.body);
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({success: false, message: "User not Available"})
        }

        const checkpassword = await bcrypt.compare(password, user.password)

        if(!checkpassword){
            return res.status(401).json({success: false, message: "Wrong Password"})
        }

        const token = jwt.sign({id:user._id}, "thisismySecetekey65876jbkjgki", {expiresIn:"5h"})

        return res.status(200).json({success: true, token, user:{name:user.name}, message: "login Successfully"})

    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({success: false, message: "Error in Login Server"})
    }

})

export default router;