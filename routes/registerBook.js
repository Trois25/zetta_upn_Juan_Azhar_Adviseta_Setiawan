const express = require("express");
const Books = require("../models/bookModels");

const router = express.Router();

// const bookStorage = [
//   { id: 1, title: "bintang", price: 85000, author: "TereLiye" },
//   { id: 2, title: "bulan", price: 80000, author: "TereLiye" },
//   { id: 3, title: "matahari", price: 75000, author: "TereLiye" },
//   { id: 4, title: "bumi", price: 70000, author: "TereLiye" },
// ];

// const addedbook = [];

// function addObject(bookStorage, object) {
//   var idSet = new Set(bookStorage.map((obj) => obj.id));

//   if (!idSet.has(object.id)) {
//     bookStorage.push(object);
//     idSet.add(object.id);
//     console.log("Object added successfully.");
//   } else {
//     console.log("ID already exists. Object not added.");
//   }
// }

//register book
router.post("/addbook", async (req, res) => {
  //method post dengan url add-order yang menerima req dan res
  //     addedbook.push({  //menambahkan id, address, dan objek buku
  //         id:req.body.id,
  //         title:req.body.title,
  //         price:req.body.price,
  //         author:req.body.author,
  //     });

  //     let data = addObject(bookStorage, addedbook)
  // console.log(data);

  //     res.json({
  //         message : 'Successfully registered a book',
  //         recentlyadded : addedbook,
  //         alldata : bookStorage,
  //     }); //memberikan respon apabila berhasil mengirim data
  try {
    const book = await Books.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to save data",
    });
  }
});

//get all book
router.get("/getall", async(req, res) => {
    try {
        
        const books = await Books.find()
        res.status(200).json(books)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"failed to save data"
        })
    }
});

//get specified book
router.get('/getbook/:bookId', async(req, res) => {
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
router.put('/getbook/:bookId', async(req, res) => {
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
router.delete('/deletebook/:bookId', async(req, res) => {
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

router.get("/readfile", (req, res) => {
  const fs = require("fs");
  fs.readFile("test.txt", (err, inputD) => {
    if (err) {
      res.status(400).json({
        status: "Failed",
        message: "Failed to read file",
      });
    }
    const result = inputD.toString();
    res.status(200).json({
      status: "success",
      message: "Success to read file",
      result,
    });
  });
});

router.get("/readfile-await", (req, res) => {
  const { readFile } = require("fs/promises");

  const myFunction = async () => {
    const result = await readFile("test.txt", "binary");
    console.log(result);
    res.status(200).json({
      status: "success",
      message: "Success to read file",
      result,
    });
  };

  myFunction();
});

module.exports = router;
