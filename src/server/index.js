/* eslint-disable no-console */
require('dotenv').config();

const app = require('./app');

let port = process.env.SERVER_PORT;

if (port == null) {
  console.warn('SERVER_PORT not specified in .env, assuming 80');
  port = 80;
}

app().then(initialized => initialized.listen(port, () => console.log(`Server listening on port ${port}`)));
