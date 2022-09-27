const connection = require('../../config/connection');

const getUser = ( username ) =>
  connection.query(
    'select * from client where username = ($1)',
    [username]
  );

module.exports = getUser;