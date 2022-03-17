import express, { json } from 'express';
import cors from 'cors';
// import { route } from './routes';
const  app = express();
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
import changeRate from './dealerApi/changeRate.js';
import changeTotalCycles from './dealerApi/changeTotalCycles.js';

//middleware
app.use(json());
app.use(cors());

// app.use(express.static("./../iitk_cycling/public"));
// app.set("view engine","ejs");
//routes
app.post('/user/addFavorite',addFavoriteCycle);
app.post('/user/bookCycle',bookCycle);
app.post('/user/confirmBooking',confirmBooking);
app.post('/user/cancelBooking',cancelBooking);
app.post('/user/deleteFavorite',deleteFavoriteCycle);
app.post('/user/pastTransaction',pastTransactionUser);
app.get('/user/viewCycle',viewCycleStore);
app.get('/user/viewFavorite',viewFavoriteCycle);
app.get('/user/viewProfile',viewProfileUser);
app.get('/user/currentStatus',currentStatusUser);

//dealer
app.post('/addCycleStore',addCycleStore);
app.post('/deleteCycleStore',deleteCycleStore);
app.post('/addCycle',addCycle);
app.post('/deleteCycle',deleteCycle);
app.post('/changeRate',changeRate);
app.post('/changeTotalCycles',changeTotalCycles);
// app.use(express)

const port = 5000;
app.listen(port,()=>console.log("Server stared on ",port));