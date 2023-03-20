const express = require('express');

const router = express.Router();

const bookStorage = {
    book : []
};

router.post('/add-order', (req, res) => { //method post dengan url add-order yang menerima req dan res
    bookStorage.book.push({  //menambahkan id, address, dan objek buku
        id : Math.random(),
        address : req.body.address,
        book : {
            title:req.body.title,
            price:req.body.price,
            author:req.body.author,
            stock:req.body.stock
        }
    });
    res.json({message : 'book order succeeded'}); //memberikan respon apabila berhasil mengirim data
});

router.get('/order', (req, res) => {

});

module.exports = router;