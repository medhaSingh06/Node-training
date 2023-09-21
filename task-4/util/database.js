const {  mongoose } = require("mongoose");

const connectDb  = async (url) => {
    try {
        const connect = await mongoose.connect(url)
        console.log("database connected successfully")
    } catch (err) {{
        console.error("error in connecting database", err);
    }}
    
}


module.exports = connectDb

