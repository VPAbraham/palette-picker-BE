import express from 'express';
import cors from 'cors';

const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuraton);

app.locals.title = 'palette picker';
app.use(cors());
app.use(express.json());

//Endpoints

app.get('/', (request, response) => {
  response.send('Welcome to the Palette Picker 🍭')
})

//GET ALL

//GET specific

//POST

//PATCH

//DELETE