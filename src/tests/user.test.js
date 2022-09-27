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

describe('login router', () => {
  test('test login query exist data', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'nasssssssssss',
        password: '123456',
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.username).toBe('nasssssssssss');
        done();
      });
  });
  test('test login query user not found', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'ahmad',
        password: '123456',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBe('Username not found');
        done();
      });
  });
  test('test login query wrong password', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'nasssssssssss',
        password: '1234567',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBe('wrong password');
        done();
      });
  });
});

describe('logout router', () => {
  test('test logout query', (done) => {
    request(app)
      .post('/api/v1/auth/logout')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBe("logged out successfully");
        done();
      });
  });
});