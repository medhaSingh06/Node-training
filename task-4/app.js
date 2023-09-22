const express = require('express');
const connectDb = require('./util/database');
// const errorHandler  = require('./util/errorHandler');
const userRouter = require('./router/user');
const friendRouter = require('./router/friend');
const app = express();
const PORT = 3000

connectDb('mongodb://127.0.0.1:27017/task')
app.use(express.urlencoded({extended:false}))

app.use('/user', userRouter )
app.use('/friend', friendRouter)
// app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`))

