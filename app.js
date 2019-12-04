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

app.get('/api/v1/palettes', async (request, response) => {
  try {
    const allPalettes = await database('palettes').select();
    response.status(200).json(allPalettes);
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
// app.post('/api/v1/palettes', (request, response) => {
//   const palette = request.body;
//
//   for (let requiredParameter of ['name', 'projects_id', 'color1', 'color2', 'color3', 'color4', 'color5']) {
//     if (!palette[requiredParameter]) {
//       return response.status(422).send({
//         error: `Expected format: { name: <String>, projects_id: <String>, color1: <String>, color2: <String>, color3: <String>, color4: <String>, color5: <String>}. You're missing a "${requiredParameter}" property.`
//       })
//     }
//   }
//   database('palettes').insert(palette, 'id')
//     .then(palette => {
//       response.status(201).json({ id: palette[0] })
//     })
//     .catch(error => {
//       response.status(500).json({ error })
//     })
// })

//PATCH

//DELETE

export default app;
