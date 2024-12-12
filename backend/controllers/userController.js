import userModel from "../model/userModel.js"
import bcrypt from "bcryptjs"
import accountModel from "../model/accountModel.js";
import { generateAccountNumber, generatePin } from "../utils/helper.js";
import jwt from 'jsonwebtoken'


const getUsers = async(req, res) => {
    const users = await userModel.find();
    
    res.json(users)
};


// Create User
const createUser = async(req, res) => {
    try {
        const { name, email, password } = req.body

        // hashpassword
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password:hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const account = await accountModel.create({
            user: user._id,
            accountNumber: generateAccountNumber(),
            pin: generatePin(),

        })

        res.status(201).json(user)


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}


// Login User
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user =  await userModel.findOne({email})

        if (!user) {
            return res.status(400).json({success:false, message: 'User does not exist'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            // set cookies
            res.cookie("jwt", token)
            // get user
            res.status(200).json(user)
        } else {
            res.json({success: false, message:"Invalid credentials"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}



const deleteUsers = async(req, res) => {
    await User.deleteMany();

    res.json({ message: "database deleted"})
}


// Get Profile

 const getProfile = async (req, res) => {
    
    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({success:true, userData})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})   
    }

}


// Logout
const logoutUser = (req, res) => {
    res.cookie("jwt", "", {maxAge: 1});
    return res.json({ message: "User logged out" })
}


export {
    getUsers,
    createUser,
    deleteUsers,
    loginUser,
    logoutUser,
    getProfile,
}



// generate unique account number and transfer pin
// // mongoose hooks

// accountSchema.pre("save", function(next) {
//     if(!this.isModified("accountNumber")) {
//         this.accountNumber = generateAccountNumber()
//     }
//     if(!this.isModified("pin")) {
//         this.accountNumber = generatePin()
//     }

//     next();
// })





