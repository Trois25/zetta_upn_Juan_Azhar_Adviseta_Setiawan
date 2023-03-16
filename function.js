const cart = [
    {title:"bintang", price:85000, author:"TereLiye"},
    {title:"bulan", price:80000, author:"TereLiye"},
    {title:"matahari", price:75000, author:"TereLiye"},
    {title:"bumi", price:70000, author:"TereLiye"}
];

function purchasing (book,discount,tax) {
    let result = 0, many = 0;
    for(let i=0; i<cart.length; i++) {
        if(book[i].title && (i < cart.length)){
            many++;

            const amountdiscount = book[i].price * (discount/100);
            let discountprice = book[i].price - amountdiscount;
            const amounttax = discountprice * (tax/100);
            let totalprice = discountprice + amounttax;            
            console.log("-----------------------------------------");
            console.log("-- book " + many + " --");
            console.log("");
            console.log("Book Title : " + book[i].title);
            console.log("Price : " + book[i].price);
            console.log("Amount of discount : " + amountdiscount);
            console.log("Price after discount : " + discountprice);
            console.log("Amount of tax : " + amounttax);
            console.log("Price after tax and discount : " + totalprice);
            console.log("");
            result += totalprice;
        }else{
            console.log("This book stock is empty");
            break;
        }
    }
    console.log("");
    console.log("-----------------------------------------");
    console.log("Amount of book : " + many)
    console.log("Total Price : " + result);
    console.log("-----------------------------------------");

    return result;
}

function credit(total, duration, tax){
    termpayment = [];
    totalcredit = 0;
    console.log("");
    console.log("--- Credit Menu ---");
    console.log("");

    console.log("Total Price : " + total);
    console.log("-----------------------------------------")
    price = (total/duration);

    const taxprice = price * (tax/100);
    const creditprice = price + taxprice;

    for(let index=0; index<duration; index++){
        termpayment.push({
            month: index+1,
            payment: creditprice
        });
        console.log("Payment month " + (index + 1) + " " + creditprice);
        totalcredit += creditprice;
    }
    console.log("----------------------------------------")
    console.log("Price total for credit : " + totalcredit);
    console.log("----------------------------------------")
    return termpayment;
}
//purchasing(cart,30,10);
credit(purchasing(cart,30,10),5,5)