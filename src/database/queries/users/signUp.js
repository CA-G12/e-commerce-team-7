const connection = require('../../config/connection');

const signUp = ({ username, password, avatar }) =>
  connection.query(
    'INSERT INTO CLIENT(username,password,avatar) VALUES ($1,$2,$3) returning id,username,avatar;',
    [
      username,
      password,
      avatar ||
        'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png',
    ]
  );

module.exports = signUp;
