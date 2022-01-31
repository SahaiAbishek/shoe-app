Add redux support for project:
npm install redux

#start and stop mongo on local mac
1)Start : brew services start mongodb-community@5.0

2)Stop: brew services stop mongodb-community@5.0

3)Verify : brew services list

#add cookie support for auth service
npm i cookie-session @types/cookie-session

#allow cors in auth app
npm install cors --save
#add below in app.js
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.options('*', cors());
