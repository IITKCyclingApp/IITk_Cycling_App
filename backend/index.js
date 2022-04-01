
//for temporary purpose
import express, { json } from 'express';
import cors from 'cors';
// import { route } from './routes';
const app = express();
import addFavoriteCycle from './userApi/addFavoriteCycle.js';
import bookCycle from './userApi/bookCycle.js';
import confirmBooking from './userApi/confirmBooking.js';
import cancelBooking from './userApi/cancelBooking.js';
import deleteFavoriteCycle from './userApi/deleteFavoriteCycle.js';
import pastTransactionUser from './userApi/pastTransaction.js';
import viewCycleStore from './userApi/viewCycleStore.js';
import viewFavoriteCycle from './userApi/viewFavorites.js';
import viewProfileUser from './userApi/viewProfile.js';
import currentStatusUser from './userApi/currentStatus.js';
//dealer
import addCycleStore from './dealerApi/addCycleStore.js'
import deleteCycleStore from './dealerApi/deleteCycleStore.js'
import addCycle from './dealerApi/addCycle.js';
import deleteCycle from './dealerApi/deleteCycle.js';
import updateCycle from './dealerApi/updateCycle.js';

import returnCycle from './dealerApi/returnCycle.js';
import dealerProfile from './dealerApi/dealerProfile.js'
import currentRentCycle from './dealerApi/currentRentcycle.js';
import currentBookedCycle from './dealerApi/bookedCycles.js';
//auth
import registerUser from './auth/registerUser.js';
import registerDealer from './auth/registerDealer.js';
import loginUser from './auth/loginUser.js'
import loginDealer from './auth/loginDealer.js'
import verify from './auth/middlewareVerify.js'
//middleware
app.use(json());
app.use(cors());


// app.use(express.static("./../iitk_cycling/public"));
// app.set("view engine","ejs");
//auth
app.post('/registerUser',registerUser);
app.post('/registerDealer',registerDealer);
app.post('/loginUser',loginUser);
app.post('/loginDealer',loginDealer);
app.use(verify);
//routes
app.post('/user/addFavorite', addFavoriteCycle);
app.post('/user/bookCycle', bookCycle);
app.post('/user/confirmBooking', confirmBooking);
app.post('/user/cancelBooking', cancelBooking);
app.post('/user/deleteFavorite', deleteFavoriteCycle);
app.post('/user/pastTransaction', pastTransactionUser);
app.post('/user/viewCycle', viewCycleStore);
app.post('/user/viewFavorite', viewFavoriteCycle);
app.post('/user/viewProfile', viewProfileUser);
app.post('/user/currentStatus', currentStatusUser);

//dealer
app.post('/addCycleStore', addCycleStore);
app.post('/deleteCycleStore', deleteCycleStore);
app.post('/addCycle', addCycle);
app.post('/deleteCycle', deleteCycle);
app.post('/editCycle', updateCycle);
app.post('/returnCycle', returnCycle);
app.post('/dealerProfile',dealerProfile);
app.post('/rentCycles',currentRentCycle);
app.post('/bookedCycles',currentBookedCycle);

// app.use(express)

const port = 5000;
app.listen(port, () => console.log("Server stared on ", port));
