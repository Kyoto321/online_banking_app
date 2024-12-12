import accountModel from "../model/accountModel.js";

//accountModel

const getAccounts = async (req, res) => {
    try {
        const accounts = await accountModel.find().polulate("user");
        res.status(200).json(accounts)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message: "Internal server error"})
    }
}

const deleteAccounts = async(req, res) => {
    await accountModel.deleteMany();
    res.json({message: "account deleted"})
}

export {
    getAccounts,
    deleteAccounts,
}