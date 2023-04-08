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

