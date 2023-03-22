const express = require('express');
const bodyParser = require('body-parser');

const registerRoutes = require('./routes/registerBook'); //export file routes
const orderBook = require('./routes/orderBook'); 

const app = express();

//use export route
app.use(bodyParser.json());
app.use(registerRoutes);
app.use(orderBook);


app.listen(3000);