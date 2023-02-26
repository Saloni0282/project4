const express = require('express');
const app =express()
app.use(express.json())
require('dotenv').config()
const Port =process.env.port
const cors = require('cors')
app.use(cors())
const {connection}= require('./db')
const {userRoute}= require('./route/user.route')
const {postRoute}=require('./route/post.route')


app.get("/",(req,res)=>{
    res.send("Welcome Purple")
})
app.use('/users', userRoute)

app.use('/posts', postRoute)
app.listen(Port, async()=>{
    try {
        await connection
        console.log(`Server running on port ${Port}`)
    } catch (err) {
        console.log(err)
    }
    
})