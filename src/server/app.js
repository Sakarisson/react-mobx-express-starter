const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

module.exports = async () => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());

  // Routes
  app.use('/build', express.static(path.join(__dirname, '../..', 'build', 'src')));
  app.use('/public', express.static(path.join(__dirname, '../..', 'public')));
  app.use('/', routes);

  return app;
};
