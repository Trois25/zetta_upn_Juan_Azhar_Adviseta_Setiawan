const express = require('express');
const bodyParser = require('body-parser');

const orderRoutes = require('./routes/order'); //export file routes

const app = express();

app.use(bodyParser.json());

app.use(orderRoutes);//use export route

app.listen(3000);