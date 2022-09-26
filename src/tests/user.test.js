const app = require('../app');
const build = require('../database/config/build');
const connection = require('../database/config/connection');

beforeEach(() => build());
afterAll(() => connection.end());



test('init', () => {
    expect(3).toBe(3);
})