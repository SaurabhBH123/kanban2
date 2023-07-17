const express = require("express")
const BoardModel = require("../models/board.model")
const boardRouter = express.Router()

boardRouter.get("/",async(req,res)=>{
    try {
        const boards = await BoardModel.find()
        res.send(boards)
    } catch (error) {
        res.send({"msg":error.message})
    }
})

boardRouter.post("/",async(req,res)=>{
    const payload = req.body
    try {
        const newBoard = new BoardModel(payload)
        await newBoard.save()
        res.send({"msg":"A new board is added"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports = boardRouter;