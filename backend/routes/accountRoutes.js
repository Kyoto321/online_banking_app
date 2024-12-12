import express from 'express'
import authUser from '../middlewares/auth.js';
import { getAccounts, deleteAccounts } from '../controllers/accountController.js';



const accountRouter = express.Router()

accountRouter.get("/list", authUser, getAccounts);
accountRouter.delete("/clear", authUser, deleteAccounts);

export default accountRouter;