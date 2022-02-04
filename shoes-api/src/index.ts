var mongoose = require('mongoose');
import { app } from './app';
require('dotenv').config();

const start = async () => {
    try {
        //await mongoose.connect('mongodb://localhost:27017/auth');
        await mongoose.connect('mongodb+srv://SahaiAbhi:Easy2Guess!@cluster0.ywskn.mongodb.net/shoes?retryWrites=true&w=majority');
        console.log('Connected to MongoDb');
    } catch (err) {
        console.error(err);
    }

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Listening on port ${process.env.SERVER_PORT}!!!!!!!!`);
    });
};

start();
