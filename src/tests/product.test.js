require('dotenv').config();
const request = require('supertest');

const { getProductsQuery } = require('../database/queries');
const app = require('../app');
const build = require('../database/config/build');
const connection = require('../database/config/connection');

beforeEach(() => build());
afterAll(() => connection.end());


describe('', () => {
    test('test get all products query', () => {
        getProductsQuery()
            .then((data) => {
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
})
