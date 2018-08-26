const express = require('express');
const path = require('path');

let paths = null;
try {
  // eslint-disable-next-line
  paths = require('../../../build/src/manifest.json');
} catch (e) {
  // probably dev
}

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '..', '..', 'views'));

/**
 * Simple middleware to initialize initialData variable
 */
const initialDataMiddleware = async (req, res, next) => {
  const initialData = {};

  res.locals.initialData = initialData;
  next();
};

/**
 * The first request should trigger initialDataMiddleware
 */
app.get('*', initialDataMiddleware);

app.get('*', (req, res) => {
  if (!paths) {
    return res.status(404).send('no');
  }
  return res.render('index', {
    bundleSrc: paths['main.js'],
  });
});

module.exports = app;
