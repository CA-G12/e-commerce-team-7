require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const build = require('../database/config/build');
const connection = require('../database/config/connection');

beforeAll(() => build());
afterAll(() => connection.end());

describe('signup router', () => {
  test('test signup query', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
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
  test('username empty', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send({
        username: '',
        password: '123456',
      })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.body).toBe('"username" is not allowed to be empty');
        done();
      });
  });
  test('password empty', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send({
        username: 'asdadasss',
        password: '',
      })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.body).toBe('"password" is not allowed to be empty');
        done();
      });
  });
  test('test', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send({
        username: 'asdadasss',
        password: 'asodjaspodj',
        avatar: '',
      })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.body).toBe('"avatar" is not allowed to be empty');
        done();
      });
  });
});
