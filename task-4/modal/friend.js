const mongoose = require('mongoose');

const friend = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    friend_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
            default: []
        }
            ],
})


module.exports = mongoose.model('Friend', friend)