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
  it('should return a 200 and all of the palettes', async () => {
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

    it('should return a 404 and the message "404: Specified palette does not exist"', async () => {
      const invalidID = -1;

      const response = await request(app).get(`/api/v1/palettes/${invalidID}`)

      expect(response.status).toBe(404);
      expect(response.body.error).toEqual('404: Specified palette does not exist');
    });
  })

  describe('POST /api/v1/palettes', () => {
    it('should return a 201 and add a new palette to the database', async () => {
      const newPalette = { name: "Unicorn", color1: "#FFFFFF", color2: "#FFFFFF", color3: "#FFFFFF", color4: "#FFFFFF", color5: "#FFFFFF" }

      const response = await request(app).post('/api/v1/palettes').send(newPalette);
      const palettes = await database('palettes').where('id', response.body.id).select();
      const palette = palettes[0];

      expect(response.status).toBe(201);
      expect(palette.name).toBe(palette.name)
    })
  })

  describe('DELETE /api/v1/palettes/:id', () => {
    it('should return a 200 and remove an existing palette from the database', async () => {
      const currentPalettes = await database('palettes').select();
      const expectedPalettes = currentPalettes.length - 1;
      const expectedPalette = await database('palettes').first();
      const { id } = expectedPalette;

      const response = await request(app).delete(`/api/v1/palettes/${id}`)
      const result = response.body[0]

      expect(response.status).toBe(200);
      expect(expectedPalettes).toEqual(currentPalettes.length - 1);
    })
  })

});
