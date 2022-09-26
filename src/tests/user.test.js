require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const build = require('../database/config/build');
const connection = require('../database/config/connection');

beforeEach(() => build());
afterAll(() => connection.end());

describe('signup router', () => {
  test('test signup query', (done) => {
    request(app)
      .post('/api/v1/auth/singup')
      .send({
        username: 'nasssssssssss',
        password: '123456',
      })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message.length).toBe(1);
        done();
      });
  });
});
