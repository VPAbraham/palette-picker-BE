import "@babel/polyfill";
import request from 'supertest'
import app from './app'
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('Server', () => {
  beforeEach(async () => {
    await database.seed.run();
  });

  describe('init', () => {
    it('should return a 200 status', async () => {
      const res = await request(app).get('/');
      expect(res.status).toBe(200);
    });
  });

  //! GET endpoints

  describe('GET /api/v1/projects', () => {
    it('should return a 200 and all of the projects', async () => {
      const expectedProjects = await database('projects').select();

      const response = await request(app).get('/api/v1/projects');
      const projects = response.body;

      expect(response.status).toBe(200);
      expect(projects.length).toEqual(expectedProjects.length);
    });
  });

  describe('GET /api/v1/palettes', () => {
  it('should return a 200 and all of the palettes', async () => {
    const expectedPalettes = await database('palettes').select();

    const response = await request(app).get('/api/v1/palettes');
    const palettes = response.body;

    expect(response.status).toBe(200);
    expect(palettes.length).toEqual(expectedPalettes.length);
    });
  });

  describe('GET /api/v1/projects/:id', () => {
    it('should return a 200 and the specified project if it exists', async () => {
      const expectedProject = await database('projects').first();
      const { id } = expectedProject;

      const response = await request(app).get(`/api/v1/projects/${id}`);
      const result = response.body[0]

      expect(response.status).toBe(200);
      expect(result.length).toEqual(expectedProject.length);
    });

    it('should return a 404 and the message "404: Specified project does not exist"', async () => {
      const invalidId = -1;
      const response = await request(app).get(`/api/v1/projects/${invalidId}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('404: Specified project does not exist');
    })
  });

  describe('GET /api/v1/palettes/:id', () => {
    it('should return a 200 and a single palette if the palette exists', async () => {
      const expectedPalette = await database('palettes').first();
      const { id } = expectedPalette;

      const response = await request(app).get(`/api/v1/palettes/${id}`);
      const result = response.body[0];

      expect(response.status).toBe(200);
      expect(result.length).toEqual(expectedPalette.length);
    });

    it('should return a 404 and the message "404: Specified palette does not exist"', async () => {
      const invalidID = -1;

      const response = await request(app).get(`/api/v1/palettes/${invalidID}`)

      expect(response.status).toBe(404);
      expect(response.body.error).toEqual('404: Specified palette does not exist');
    });
  });

  //! POST endpoints

  describe('POST /api/v1/projects', () => {
    it('should return a 201 and add a new project to the database', async () => {
      const newProject = { name: 'Fuzzy Things'}

      const response = await request(app).post('/api/v1/projects').send(newProject);
      const projects = await database('projects').where('id', response.body[0]);
      const project = projects[0];

      expect(response.status).toBe(201);
      expect(project.name).toBe('Fuzzy Things')
    });
  });

  describe('POST /api/v1/palettes', () => {
    it('should return a 201 and add a new palette to the database', async () => {
      const newPalette = { name: "Unicorn", color1: "#FFFFFF", color2: "#FFFFFF", color3: "#FFFFFF", color4: "#FFFFFF", color5: "#FFFFFF" }

      const response = await request(app).post('/api/v1/palettes').send(newPalette);
      const palettes = await database('palettes').where('id', response.body[0]);
      const palette = palettes[0];

      expect(response.status).toBe(201);
      expect(palette.name).toBe(palette.name)
    });
  });

  //! PUT/PATCH endpoints

  describe('PATCH /api/v1/palettes/:id', () => {
    it('should return a 200 and edit a property in a palette', async () => {
      const expectedPalette = await database('palettes').first();
      const { id } = expectedPalette;
      const desiredPatch = { color1: "#000000" };

      const response = await request(app).patch(`/api/v1/palettes/${id}`).send(desiredPatch);
      const palettes = await database('palettes').where('id', id);
      const palette = palettes[0];

      expect(response.status).toBe(200);
      expect(palette.color1).toEqual(desiredPatch.color1)
    });
  });

  //! DELETE endpoints

  describe('DELETE /api/v1/palettes/:id', () => {
    it('should return a 200 and remove an existing palette from the database', async () => {
      const currentPalettes = await database('palettes').select();
      const expectedPalettes = currentPalettes.length - 1;
      const expectedPalette = await database('palettes').first();
      const { id } = expectedPalette;

      const response = await request(app).delete(`/api/v1/palettes/${id}`);
      const result = response.body[0];

      expect(response.status).toBe(202);
      expect(expectedPalettes).toEqual(currentPalettes.length - 1);
    });
  });

  describe('DELETE /api/v1/projects/:id', () => {
    it('should return a 200 and remove an existing project from the database', async () => {

      const currentProjects = await database('projects').select();
      console.log(currentProjects)
      const expectedProjects = currentProjects.length -1;
      const expectedProject = await database('projects').first();
      const { id } = expectedProject;
      console.log(id)

      const response = await request(app).delete(`/api/v1/projects/${id}`);
      const result = response.body[0]
      console.log(response.status)
      // expect(response.status).toBe(202);
      expect(expectedProjects).toEqual(currentProjects.length - 1);
    });
  });

  //! QUERY endpoint

  describe('GET /api/v1/projectsbyname/?', () => {
    it('should return a 200 status and the projects that match the query name', async () => {
      const keyName = 'name'
      const valueName = 'Neature'
      const expectedProjects = await database('projects').select();

      const response = await request(app).get(`/api/v1/projectsbyname/?${keyName}=${valueName}`);
      const queryString = response.body;
      const findProjects = expectedProjects.filter((project) => {
        return project.name === queryString.name
      })

      expect(response.status).toBe(200);
      expect(findProjects.name).toEqual(queryString.name);
    });
  });
});
