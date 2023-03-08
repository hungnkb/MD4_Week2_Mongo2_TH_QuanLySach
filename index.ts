import bodyParser from 'body-parser';
import express from 'express';
import route from './src/routers';
import passport from 'passport';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import database from './src/configs/database';


const app = express();
database.connect();

dotenv.config();
let PORT = process.env.PORT;


app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
dotenv.config();
app.use(cookieParser(process.env.USER_CODE_SECRET));

route(app);


app.listen(PORT, () => {
  console.log('Server is running at ' + PORT);
  
})