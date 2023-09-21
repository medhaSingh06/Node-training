const mongoose = require('mongoose');

const user = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        validate : {
            validator: function(str) {
                return str.length <= 32
            },
            message: 'Name must be less then 32 characters'
        }
    },
    age: {
        type: Number,
        min: 1,
        max: 100,
        required: true,
        },
    phone_no:{
            type: String,
            required: true,
            validate: function(str) {
                const phoneRegex = /^[0-9]{10}$/

                return phoneRegex.test(str)
            },
            message: 'Phone number must be a 10-digit numeric value'
    }
});

// pre-save hook
user.pre('save', function(next){
    if(this.name && typeof this.name === 'string'){
        this.name = this.name.toUpperCase();
    }
    next();
})


// post-save hook
user.post('save', function (doc){
    console.log(`User document saved successfully: ${doc.name}`)
})

module.exports = mongoose.model('User', user)