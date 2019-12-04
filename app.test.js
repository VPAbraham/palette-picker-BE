import "@babel/polyfill";
import request from 'supertest'
import app from './app'
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('Server', () => {
  beforeEach(async () => {
    await database.seed.run();
  })

  describe('init', () => {
    it('should return a 200 status', async () => {
      const res = await request(app).get('/')
      expect(res.status).toBe(200)
    });
  });

  describe('GET api/v1/palettes', () => {
    it('should return all palettes', async () => {
      const expectedPalettes = await database('palettes').select();

    })
  })

});
