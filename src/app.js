const { join } = require('path');

const compression = require('compression');
const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./routes');
const handleError = require('./error/handleError');

const app = express();
app.set('port', process.env.PORT || 8080);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use('/api/v1/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(handleError);

module.exports = app;
