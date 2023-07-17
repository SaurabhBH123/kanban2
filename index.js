const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const boardRouter = require("./routes/board.routes")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/boards",boardRouter)
app.listen(8080,async()=>{
    try {
        await mongoose.connect(`mongodb+srv://bhandarisaurabh:bhandarisaurabh@cluster0.k9ntg6n.mongodb.net/kanbanBoard2?retryWrites=true&w=majority`)
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running at port 8080")
})