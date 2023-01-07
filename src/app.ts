import express, { Application } from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import logger from 'morgan';

import startUpMongo from './config/startUpMongo';

require("dotenv").config();

const app:Application = express();

import {
    AuthRoute
} from './routes'


/// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));
startUpMongo();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));


app.get("/", (req, res, next) => {
  res.send("Backend Api");
});




//server routes
app.use('/api/v1/auth',AuthRoute)



export {app}