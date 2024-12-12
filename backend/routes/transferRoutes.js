import express from 'express'
import { makeTransfer, clearTransactions } from '../controllers/transferController.js'
import authUser from '../middlewares/auth.js';


const transferRouter = express.Router()

transferRouter.post("/", authUser, makeTransfer);
transferRouter.delete("/clear", authUser, clearTransactions)

export default transferRouter;