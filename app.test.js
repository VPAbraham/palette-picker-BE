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

  describe('GET /api/v1/palettes', () => {
  it('should return a 200 and all of the students', async () => {
    const expectedPalettes = await database('palettes').select();

    const response = await request(app).get('/api/v1/palettes');
    const palettes = response.body;

    expect(response.status).toBe(200);
    expect(palettes.length).toEqual(expectedPalettes.length);
  });
});

  describe('GET /api/v1/palettes/:id', () => {
    it('should return a 200 and a single palette if the palette exists', async () => {
      const expectedPalette = await database('palettes').first();
      const { id } = expectedPalette;

      const response = await request(app).get(`/api/v1/palettes/${id}`);
      const result = response.body[0];

      expect(response.status).toBe(200);
      expect(result.length).toEqual(expectedPalette.length);
    })
  })

});
