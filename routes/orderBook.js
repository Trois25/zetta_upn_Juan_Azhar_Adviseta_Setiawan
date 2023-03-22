const express = require('express');

const router = express.Router();
const checkAuth = require('./authLogin')

router.post('/buyBook',checkAuth,(req, res) => {

    const{
        title,
        bookPrice,
        tax,
        discount,
        Itemamount,
        Itembuy,
        duration
    } = req.body;

    let result = 0,total=0;
    let amountdiscount,amounttax;
        if(Itemamount > Itembuy){
            for(let x = 1; x<Itembuy;x++){
                total = bookPrice += bookPrice
            };
    
            amountdiscount = total * (discount/100);
            let discountprice = total - amountdiscount;
            amounttax = discountprice * (tax/100);
            result = discountprice + amounttax;
                 
    
        }else{
            res.status(400).json({
                status: 'fail',
                message:'Book is out of stock'
            });
        }
    let termpayment = [];
    let totalcredit = 0;
    let price = (result/duration);

    const taxprice = price * (tax/100);
    const creditprice = price + taxprice;

    for(let index=0; index<duration; index++){
        termpayment.push({
            month: index+1,
            payment: creditprice
        });
        totalcredit += creditprice;
    };
    res.status(200).json({
        status: 'success',
        message: 'Ordered Book Successfully',
        data: {
            'title ' : title,
            'book price ' : price,
            'tax ' : amounttax,
            'discount ' : amountdiscount,
            'Final Price ' : result,
            'Credit month' : duration,
            'List Pembayaran ' : termpayment
        }
    })
})

module.exports = router;