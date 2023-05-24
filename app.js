const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express();

//assign route to the variable
const registerRoutes = require('./routes/registerBook'); //export file routes
const orderBook = require('./routes/orderBook'); 

//use export route
app.use(bodyParser.json());
app.use(registerRoutes);
app.use(orderBook);

//connect db and server
mongoose.connect('mongodb://127.0.0.1:27017/BookList')
.then(()=> {

    app.listen(3000, ()=> {
        console.log('listening on port 3000')
    })

    console.log('mongodb connect')
}).catch((err) => {
    console.log(err)
})

// const button = document.querySelector('button');
// const output = document.querySelector('p');

// const getPosition = (opts) => {
//   const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (success) => {
//         resolve(success);
//       },
//       (error) => {
//         reject(error);
//       },
//       opts
//     );
//   });
//   return promise;
// };

// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, duration);
//   });
//   return promise;
// };

// async function trackUserHandler() {
// //   let positionData;
// let timerData,posData;
//   try{
//     posData = await getPosition();
//     timerData = await setTimer(2000);
//   }catch(err){
//     console.log(err);
//   }
//   console.log(timerData,posData);
//     // .then((posData) => {
//     //   positionData = posData;
//     //   return setTimer(2000);
//     // })
//     // .catch((err) => {
//     //   console.log(err);
//     //   return 'on we go...';
//     // })
//     // .then((data) => {
//     //   console.log(data, positionData);
//     // });
// //   setTimer(1000).then(() => {
// //     console.log('Timer done!');
// //   });
// //   console.log('Getting position...');
// }

// button.addEventListener('click', trackUserHandler);

