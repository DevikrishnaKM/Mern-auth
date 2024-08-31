import Admin from '../models/adminModel.js';
import jwt from 'jsonwebtoken'
// import User from '../models/userModel.js';
// import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js';

export const adminLogin = async (req, res, next) => {
    console.log(req.body)
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