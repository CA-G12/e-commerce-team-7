require('dotenv').config();
const request = require('supertest');

const { addCart, getCart, deleteCart } = require('../database/queries');
const app = require('../app');
const build = require('../database/config/build');
const connection = require('../database/config/connection');

beforeEach(() => build());
afterAll(() => connection.end());

test(' add cart ', () => {

  addCart(1, 3, 10).then((data) => {
    expect(data.rows.length).toBe(1);
  });
});


test('delete cart ', () => {
    deleteCart(1, 1).then((data) => {
        expect(data.rows[0].id).toBe(1);
    });
});
test(' get cart ', () => {
    getCart(1).then((data) => {
        expect(data.rows.length).toBeGreaterThan(0)
    });
});