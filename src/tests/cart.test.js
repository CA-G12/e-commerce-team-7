require('dotenv').config();
const request = require('supertest');

const { addCart, getCart, deleteCart } = require('../database/queries');
const {
  deleteCartItem,
  getCartItem,
  addCartItem,
  updateCartItem,
} = require('../controllers/cart');

const app = require('../app');
const build = require('../database/config/build');
const connection = require('../database/config/connection');
const supertest = require('supertest');

beforeEach(() => build());
afterAll(() => connection.end());
describe('  add item into Cart', () => {
  test('add item router', (done) => {
    request(app)
      .post('/api/v1/cart/')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJzYWlmIiwiaWF0IjoxNjY0MjE4NzQ2fQ.cjfUbvrfQoJ4r0mifiLbana-m8OQn8tV04MPjPuCF30',
      ])
      .send({
        productId: 1,
        quantity: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.length).toBe(1);
        done();
      });
  });
  test('insert into cart ', () => {
    addCart(1, 3, 10).then((data) => {
      expect(data.rows.length).toBe(1);
    });
  });
});
describe('remove item from cart', () => {
  test('delete router ', (done) => {
    request(app)
      .delete('/api/v1/cart/')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJzYWlmIiwiaWF0IjoxNjY0MjE4NzQ2fQ.cjfUbvrfQoJ4r0mifiLbana-m8OQn8tV04MPjPuCF30',
      ])
      .send({ productId: 3 })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.length).toBe(1);
        done();
      });
  });
  test('delete item  from cart ', () => {
    deleteCart(1, 1).then((data) => {
      expect(data.rows[0].id).toBe(1);
    });
  });
});
describe('get all cart item ', () => {
  test('get items router ', (done) => {
    request(app)
      .get('/api/v1/cart/')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJzYWlmIiwiaWF0IjoxNjY0MjE4NzQ2fQ.cjfUbvrfQoJ4r0mifiLbana-m8OQn8tV04MPjPuCF30',
      ])
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.length).toBeGreaterThan(0);
        done();
      });
  });
  test(' get cart ', () => {
    getCart(1).then((data) => {
      expect(data.rows.length).toBeGreaterThan(0);
    });
  });
});
