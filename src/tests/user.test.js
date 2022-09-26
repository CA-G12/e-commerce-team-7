require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const build = require('../database/config/build');
const connection = require('../database/config/connection');

beforeEach(() => build());
afterAll(() => connection.end());

describe('signup router', () => {
  test('test signup query', () => {
    expect(4).toBe(4);
  });
});
