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



//middleware
app.use(json());
app.use(cors());

// app.use(express.static("./../iitk_cycling/public"));
// app.set("view engine","ejs");
//routes
app.post('/addFavoriteCycle',addFavoriteCycle);
app.post('/bookCycle',bookCycle);
app.post('/confirmBooking',confirmBooking);
app.post('/cancelBooking',cancelBooking);
app.post('/deleteFavoriteCycle',deleteFavoriteCycle);
app.post('/pastTransactionUser',pastTransactionUser);
app.get('/viewCycleStore',viewCycleStore);
app.get('/viewFavoriteCycle',viewFavoriteCycle);
app.get('/viewProfileUser',viewProfileUser);


// app.use(express)

const port = 5000;
app.listen(port,()=>console.log("Server stared on ",port));