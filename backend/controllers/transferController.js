import accountModel from "../model/accountModel.js";
import transferModel from "../model/transferModel.js";
import userModel from "../model/userModel.js";


const makeTransfer = async(req, res) => {
    
    const { name, accountNumber, amount } = req.body;

    // verify name and account number  
    const getAccountNumber = await accountModel.findOne({accountNumber})
    //console.log(getAccountNumber)

    if(!getAccountNumber) {
        return res.status(400).json({"message": "Account number is not valid"})
    }

    const getName = await userModel.findOne({name})
    //console.log(getName)
    
    // verify enough funds in account
    const senderId = req.body.userId;
    //console.log(senderId)

    // sender account balance
    const sender = await accountModel.findOne({user: senderId})

    if(!sender) {
       return res.status(400).json({message: "Invalid transaction"})
    }

    if(sender.balance < amount) {
       return res.status(400).json({message: "Insufficient funds"})
    }

    const receiver = await accountModel.findOne({ accountNumber })
    
    // credit the receiver snf debit the giver
    receiver.balance += amount
    sender.balance -= amount

    await receiver.save()
    await sender.save()

    // transaction data
    const transfer = await transferModel.create({
        senderId: req.body.userId,
        receiverId: req.body.receiverId
    })
    
    res.json({ success: true, senderBalance: sender.balance })
    res.json({message: "Transfer Succcessful"})
}

const clearTransactions = async(req, res) => {
    await transferModel.deleteMany()
    res.json({message: "transaction deleted"})
}


export {
    makeTransfer,
    clearTransactions,
}
