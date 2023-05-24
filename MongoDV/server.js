const express = require('express')
const mongoose = require('mongoose')
const Books = require('./models/bookModels')
const app = express()

app.use(express.json())


//store book
app.post('/storebook', async(req, res) => {
    try {

        const book = await Books.create(req.body)
        res.status(200).json(book)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"failed to save data"
        })
    }
})

//get allbook
app.get('/getbook', async(req, res) => {
    try {
        
        const books = await Books.find()
        res.status(200).json(books)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"failed to save data"
        })
    }
})

//get specified book
app.get('/getbook/:bookId', async(req, res) => {
    try {

        const {bookId} = req.params
        
        const book = await Books.findById(bookId)
        res.status(200).json(book)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"failed to save data"
        })
    }
})

//update book
app.put('/getbook/:bookId', async(req, res) => {
    try {
        
        const {bookId} = req.params
        const book = await Books.findByIdAndUpdate(bookId, req.body)
        //when book cant find
        if(!book){
            return res.status(404).json({message:"cant find the book with id" + bookId})
        }

        const updateBook = await Books.findById(bookId)
        res.status(200).json(updateBook)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"failed to save data"
        })
    }
})

//delete book
app.delete('/deletebook/:bookId', async(req, res) => {
    try {
        const {bookId} = req.params
        const book = await Books.findByIdAndDelete(bookId)
        if(!book){
            return res.status(404).json({message:"cant find the book with id" + bookId})
        }
        res.send(200).json({book})

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"failed to save data"
        })
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/BookList')
.then(()=> {

    app.listen(3000, ()=> {
        console.log('listening on port 3000')
    })

    console.log('mongodb connect')
}).catch((err) => {
    console.log(err)
})

