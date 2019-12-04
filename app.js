import express from 'express';
import cors from 'cors';

const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.locals.title = 'palette picker';
app.use(cors());
app.use(express.json());

//Endpoints

app.get('/', (request, response) => {
  response.send('Welcome to the Palette Picker 🍭')
})

//GET ALL
app.get('/api/v1/projects', async (request, response) => {
  try {
    const allProjects = await database('projects').select();
    response.status(200).json(allProjects);
  } catch (error) {
    response.status(500).json({ error });
  }
});

//GET specific
app.get('/api/v1/projects/:id', async (request, response) => {
  const { id } = request.params;
  try {
    const project = await database('projects').where('id', id).select();
    if (project.length) {
      return response.status(200).json(project)
    }
    response.status(404).json({ error: '404: Specified project does not exist'});
  } catch {
    response.status(500).json({ error: '500: Internal Server Error'})
  }
})
 
//POST

//PATCH

//DELETE

export default app;
