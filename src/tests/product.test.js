require('dotenv').config();
const request = require('supertest');

const { getProductsQuery,getAllCategory,filterCategory,filterPrice} = require('../database/queries');
const app = require('../app');
const build = require('../database/config/build');
const connection = require('../database/config/connection');

beforeEach(() => build());
afterAll(() => connection.end());

describe('', () => {
  test('test get all products query', () => {
    getProductsQuery().then((data) => {
      expect(data.rows.length).toBeGreaterThan(0);
    });
  });

  test('test that products endpoint returns data', (done) => {
    request(app)
      .get('/api/v1/product/')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body.length).toBeGreaterThan(0);
        return done();
      });
  });
});
describe(' get all category ',()=>{
  
  test('test get all category query', () => {
    getAllCategory().then((data) => {
      expect(data.rows.length).toBeGreaterThan(1);
    });
  });
  test('test that category endpoint returns data', (done) => {
    request(app)
      .get('/api/v1/product/categories/')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toBeGreaterThan(1);
        return done();
      });
  });
})

describe('filter By category ',()=>{
  test('test filter category query', () => {
    filterCategory('smartphones').then((data) => {
      expect(data.rows.length).toBeGreaterThan(1);
    });
  });
  
  test('test filter category endpoint returns data', (done) => {
    request(app)
      .post('/api/v1/product/filterCategory/')
      .send({
        category : 'smartphones'
      })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toBeGreaterThan(1);
        return done();
      });
  });

})  

test('test filter price query', () => {
  filterPrice().then((data) => {
    expect(data.rows.length).toBeGreaterThan(1);
  });
});
test('test filter price endpoint returns data', (done) => {
  request(app)
    .post('/api/v1/product/filterPrice/')
    .send({
      order: 'desc'
    })
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.length).toBeGreaterThan(1);
      return done();
    });
});