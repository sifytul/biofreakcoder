import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { User } from "../../../models/postSchema";

export default async function handler(req, res) {
    const {email, password} = req.body;

    if (req.method==="POST"){
        if (!email || !password) {
            res.status(400).json({message:"Invalid Credentials"})
        }
        const user = await User.findOne({email: email})
        if (!user) {
            res.status(400).json({message:"Invalid Credentials"})
        }
        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            res.status(400).json({message: "Invalid Credentials"})
        }
        console.log(user)
        delete user._doc.password
        const token = jwt.sign(JSON.parse(JSON.stringify(user)), 'secret')

        req.head 
        
        res.json({message:"success", token})
    }
}
