import {getShoeRouter} from "./routes/GetShoes";

var express = require('express');
import { json } from 'body-parser';
import { addShoeRouter } from './routes/AddShoe';

const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());
app.set('trust proxy', true);
app.use(json());

app.use(addShoeRouter);
app.use(getShoeRouter);

export { app };
