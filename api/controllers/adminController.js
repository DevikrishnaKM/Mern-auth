import Admin from '../models/adminModel.js';
import jwt from 'jsonwebtoken'
 import User from '../models/userModel.js';
 import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js';

export const adminLogin = async (req, res, next) => {
    // console.log(req.body)
    const {name,password} = req.body
    try {
        const admin = await Admin.findOne({name})
        if(!admin) return next(errorHandler('admin not found', 404))

        if(password !== admin.password) return next(errorHandler('password not matched', 404))

         const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
        const { password: _, ...rest } = admin._doc;
        const expiryDate = new Date(Date.now() + 360000);
        res
          .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
          .status(200)
          .json(rest);
    } catch (error) {
        console.log(error)
    }
}

export const adminHome = async (req, res) => {
  try {
      const users = await User.find().sort({_id: -1}); 
      console.log(users);
      res.status(200).json(users); 
  } catch (error) {
      console.log(error); // Log the error for debugging
      res.status(500).json({ message: 'Server error' }); // Send a 500 response in case of an error
  }
};

export const adminLogout = (req, res) => {
    res.clearCookie("access_token").status(200).json("Signout Success");
  };
export const addUser = async(req,res,next)=>{
    try{
      const {username, email,password} = req.body
       const user = await User.findOne({username})
       const emailExist = await User.findOne({email})

       if(user){
        return res.json({success:false,message: 'Username already exists'})
       }
       
       if(emailExist){
        return res.json({success:false,message: 'Email already exists'})
       }
       
       if(password.length<8){
        return res.json({success:false,message: 'Password too short'})
       }

      const hashedPassword = bcrypt.hashSync(password,10)
      const newUser = new User({username,email,password:hashedPassword})
      console.log(newUser)
      await newUser.save()
      res.status(201).json({message:'User added successfully'})
    }catch(error){
      next(error)
    }
  }

