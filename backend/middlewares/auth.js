import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        //  verify the token
        // get token
        //const {token} = req.headers
        const token = req.cookies.jwt

        if(!token) {
            return res.json({success:false, message:"Not Authorized"})
        }
          // decode token to verify token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default authUser




// if(!token) {
        //     return res.json({success:false, message:"Not Authorized"})
        // }
        // // decode token to verify token
        // const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        // req.body.userId = token_decode.id
        // next()