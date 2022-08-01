const User = require("../../models/User")

const allUser = async(req , res) => {

    const {email:loginUserEmail} = req.query

    const result = await User.find({})

    if(!result){
        return res.json({success:false , result:"Not Found"})
    }

    const filteredUser = result.filter(user => user.email !== loginUserEmail)

    res.json({success:true , result:filteredUser})
}

module.exports = allUser