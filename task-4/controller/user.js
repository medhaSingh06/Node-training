const User = require("../modal/user")
const Friend = require("../modal/friend")


const addUser = async (req, res) => {
    const {name, age, phone_no} = req.body;

    const user = new User({name, age, phone_no})

    const isExistingUser = await User.findOne({phone_no: phone_no})

    if (isExistingUser) {
        throw new Error('User already exists.');
    }

    await user.save()
    const friend = new Friend()
    friend.user_id = user._id

    await friend.save()

    res.json({
        message: "User successfully added",
        user: user
    })

}


module.exports = addUser