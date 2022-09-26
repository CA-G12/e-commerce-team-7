const connection = require('../../config/connection');

const signUp = ({ username, password, avatar }) =>
  connection.query(
    'INSERT INTO CLIENT(username,password,avatar) VALUES ($1,$2,$3) returning id,username,avatar;',
    [username, password, avatar || null]
  );

module.exports = signUp;
