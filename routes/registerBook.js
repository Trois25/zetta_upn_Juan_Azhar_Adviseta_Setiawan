const express = require('express');

const router = express.Router();

const bookStorage = [
        {id:1,title:"bintang", price:85000, author:"TereLiye"},
        {id:2,title:"bulan", price:80000, author:"TereLiye"},
        {id:3,title:"matahari", price:75000, author:"TereLiye"},
        {id:4,title:"bumi", price:70000, author:"TereLiye"}
];

//const addeddata = []
const pushbook = new Set();
const listbook = new Map(bookStorage);
//const booklist = [...bookStorage,...addeddata]


router.post('/add-order', (req, res) => { //method post dengan url add-order yang menerima req dan res
    bookStorage.push({  //menambahkan id, address, dan objek buku
            id:req.body.id,
            title:req.body.title,
            price:req.body.price,
            author:req.body.author,
    });
    pushbook.add(bookStorage)
    console.log(pushbook)
    listbook.set(bookStorage)
    //console.log(listbook)

    res.json({
        message : 'Successfully registered a book',
        alldata : bookStorage,
        setData : pushbook,
        mapdata:listbook,
    }); //memberikan respon apabila berhasil mengirim data
});

router.get('/order', (req,res) => {
    res.send(bookStorage);
});

router.get('/readfile',(req,res) => {;
    const fs = require('fs')
    fs.readFile('test.txt', (err, inputD) => {
   if (err) {
    res.status(400).json({
        status: 'Failed',
        message: 'Failed to read file',
    });
   };
   const result = inputD.toString()
      res.status(200).json({
        status: 'success',
        message: 'Success to read file',
        result
    });
})
});

router.get('/readfile-await',(req,res) => {;
    const {readFile} = require('fs/promises');

    const myFunction = async()=>{
        const result = await readFile('test.txt','binary')
        console.log(result)
        res.status(200).json({
            status: 'success',
            message: 'Success to read file',
            result
        });
    }

    myFunction()

});


module.exports = router;