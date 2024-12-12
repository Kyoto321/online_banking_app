import express from 'express'
import { 
    getUsers, 
    createUser, 
    deleteUsers, 
    loginUser, 
    logoutUser,
    getProfile
} from '../controllers/userController.js'
import authUser from '../middlewares/auth.js';



const userRouter = express.Router()

userRouter.get("/", getUsers);

userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);
userRouter.get("/profile", authUser, getProfile);

//userRouter.delete("/", deleteUsers);

export default userRouter;
