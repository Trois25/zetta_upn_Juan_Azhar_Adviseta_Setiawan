const mongoose = require('mongoose')

const booklistSchema = mongoose.Schema(
    {
        title: {
            type: 'string',
            required: [true,'enter the book title']
        },
        price: {
            type : Number,
            required: true
        },
        author: {
            type : 'string',
            required: true
        },
        quantity: {
            type : Number,
            required: true,
            default : 0
        }
    },
    {
        timestamp: true,
    }
)

const Books = mongoose.model('BookList',booklistSchema)

module.exports = Books;