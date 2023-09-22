const User = require("../modal/user")
const Friend = require("../modal/friend")


const addUser = async (req, res) => {
    try {
        const {name, age, phone_no} = req.body;

        const user = new User({name, age, phone_no})
    
        const isExistingUser = await User.findOne({phone_no: phone_no})
    
        if (isExistingUser) {
            // throw new Error('User already exists.');
            res.status(401).json({message: 'User already exists'})
        }
    
        await user.save()
        const friend = new Friend()
        friend.user_id = user._id
    
        await friend.save()
    
        res.status(201).json({
            message: "User successfully added",
            user: user
        })
    
    } catch(err)
    {
        res.status(500).json({message: "Server error"})
    }
    
}


module.exports = {addUser}