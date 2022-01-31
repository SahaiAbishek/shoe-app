import mongoose from 'mongoose';
import { app } from './app';
require('dotenv').config();

const start = async () => {
  if(!process.env.JWT_KEY){
    throw new Error('JWT_KEY must be defined');
  }
  try {
    //await mongoose.connect('mongodb://localhost:27017/auth');
    await mongoose.connect('mongodb+srv://SahaiAbhi:Easy2Guess!@cluster0.ywskn.mongodb.net/auth?retryWrites=true&w=majority');
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}!!!!!!!!`);
  });
};

start();
