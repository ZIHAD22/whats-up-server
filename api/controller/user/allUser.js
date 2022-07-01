const User = require("../../models/User")

const allUser = async(req , res) => {

    const users = await User.find({})

    if(!users){
        return res.json({success:false , result:"Not Found"})
    }

    res.json({success:true , result:users})
}

module.exports = allUser