import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup=async(req, res)=>{
    const {fullName, email, password}=req.body
    try {
        if(!fullName || !email || !password){
           return res.status(400).json({message:"Remplisser tous les champs"}) 
        }
        if(password.length<6){
            return res.status(400).json({message: "Votre mot de passe doit avoir au moins 6 caracteres"});
        }

        const user= await User.findOne({email})
        
        if(user) return res.status(400).json({message: "L'adresse email existe deja"});

        const salt = await bcrypt.genSalt(10)
        const hashdPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName,
            email,
            password: hashdPassword,
        })
        if(newUser){
            //generate jwt token here
            generateToken(newUser._id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic: newUser.profilePic,
            });

        }else{
            res.status(400).json({message:"Donnee invalides"});
        }


    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({message: "internal Server Error"});
        
    }
};
export const login=(req, res)=>{
    res.send("login route") 
}
export const logout=(req, res)=>{
    res.send("logout route")
}