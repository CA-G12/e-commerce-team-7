const connection = require('../../config/connection');

const getUsername = (username) =>
  connection.query('select username from client where username = ($1)', [
    username,
  ]);

module.exports = getUsername;
