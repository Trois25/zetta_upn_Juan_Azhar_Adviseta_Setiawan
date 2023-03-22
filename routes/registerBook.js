const express = require('express');

const router = express.Router();

const bookStorage = [
        {id:1,title:"bintang", price:85000, author:"TereLiye"},
        {id:2,title:"bulan", price:80000, author:"TereLiye"},
        {id:3,title:"matahari", price:75000, author:"TereLiye"},
        {id:4,title:"bumi", price:70000, author:"TereLiye"}
];

router.post('/add-order', (req, res) => { //method post dengan url add-order yang menerima req dan res
    bookStorage.push({  //menambahkan id, address, dan objek buku
            id:req.body.id,
            title:req.body.title,
            price:req.body.price,
            author:req.body.author,
    });
    res.json({message : 'Successfully registered a book'}); //memberikan respon apabila berhasil mengirim data
});

router.get('/order', (res) => {
    //res.send(bookStorage);
});


module.exports = router;