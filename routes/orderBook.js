const express = require("express");

const router = express.Router();
const checkAuth = require("./authLogin");

const credit = (time, result) => {
  let termpayment = [];
  let totalcredit = 0;
  let price = result / time;

  const taxprice = price * (10 / 100);
  const creditprice = price + taxprice;

  for (let index = 0; index < time; index++) {
    termpayment.push({
      month: index + 1,
      payment_each_month: creditprice,
      total_Payment : creditprice * time,
    });
    totalcredit += creditprice;
  }
  return termpayment;
};


router.post("/buyBook", checkAuth, (req, res) => {
    let {title, 
        bookPrice, 
        discount, 
        Itemamount, 
        Itembuy, 
        duration } =
    req.body;
    
    async function buyBook(discount, Itemamount, Itembuy, duration) {
      
        let result = 0,
          total = 0;
        let amountdiscount, amounttax;
        if (Itemamount > Itembuy) {
          for (let x = 1; x < Itembuy; x++) {
            total = bookPrice += bookPrice;
          }
      
          amountdiscount = total * (discount / 100);
          let discountprice = total - amountdiscount;
          amounttax = discountprice * (10 / 100);
          result = discountprice + amounttax;
        } else {
          res.status(400).json({
            status: "fail",
            message: "Book is out of stock",
          });
        }
        res.status(200).json({
            status: "success",
            message: "Ordered Book Successfully",
            data: {
              "title ": title,
              "book price ": bookPrice,
              "tax ": amounttax,
              "discount ": amountdiscount,
              "Final Price ": result,
              "Credit month": duration,
              "List Pembayaran ": await credit(duration, result),
            },
          });
      }

  try {
    buyBook(discount, Itemamount, Itembuy, duration);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "no data for the book",
    });
  }

  // let{
  //     title,
  //     bookPrice,
  //     tax,
  //     discount,
  //     Itemamount,
  //     Itembuy,
  //     duration
  // } = req.body;

  // let result = 0,total=0;
  // let amountdiscount,amounttax;
  //     if(Itemamount > Itembuy){
  //         for(let x = 1; x<Itembuy;x++){
  //             total = bookPrice += bookPrice
  //         };

  //         amountdiscount = total * (discount/100);
  //         let discountprice = total - amountdiscount;
  //         amounttax = discountprice * (tax/100);
  //         result = discountprice + amounttax;

  //     }else{
  //         res.status(400).json({
  //             status: 'fail',
  //             message:'Book is out of stock'
  //         });
  //     }
  // let termpayment = [];
  // let totalcredit = 0;
  // let price = (result/duration);

  // const taxprice = price * (tax/100);
  // const creditprice = price + taxprice;

  // for(let index=0; index<duration; index++){
  //     termpayment.push({
  //         month: index+1,
  //         payment: creditprice
  //     });
  //     totalcredit += creditprice;
  // };
  // res.status(200).json({
  //     status: 'success',
  //     message: 'Ordered Book Successfully',
  //     data: {
  //         'title ' : title,
  //         'book price ' : price,
  //         'tax ' : amounttax,
  //         'discount ' : amountdiscount,
  //         'Final Price ' : result,
  //         'Credit month' : duration,
  //         'List Pembayaran ' : termpayment
  //     }
  // })
});

module.exports = router;
