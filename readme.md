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
#add below in app.ts
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.options('*', cors());

### Create a new shoes API
1) Create folder shoes
2) cd shoes
3) npm init -y
4) npm install express cors axios nodemon
