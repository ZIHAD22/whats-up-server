const User = require("../../models/User")

const userProfilePic = async (req , res) => {
    const {id} = req.params
    
    const selectedUser = await User.findById(id)

    res.json({success:true , result:selectedUser})

}

module.exports = userProfilePic