const User = require("../modal/user")
const Friend = require("../modal/friend")


const addFriend = async (req, res) => {
    try {
        const {user_id, friend_id} = req.body
    
        const user = await User.findById(user_id)
    
        if(!user){
            throw new Error('User not found')
        }
     
        const friend = await Friend.findOne({user_id})
    
        if(!friend){
            res.status(404).json({message : "User not found"})
            // throw new Error('User not found in friends collection.')
        }
    
        if(friend.friend_id.push(friend_id))
    
        await friend.save()
    
        res.status(201).json({user, friend})
    } catch (err) {
        res.status(500).json({message: "Server error"})
    }
    
} 


const  getFriend = async (req, res) => {
    try{
        const {user_id} = req.params.id

    const user = await Friend.findOne({user_id}).populate('friend_id','-_id name age phone_no')
    const userName = await User.findById(user.user_id)


    res.json({
        user: userName.name,
        friends: user.friend_id
    })
    } catch (err) {
        res.status(500).json({message: "Server error"})
    }
    
}


module.exports = {
    getFriend,
    addFriend
}