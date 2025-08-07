const fs = require('fs');
const path = require('path');
const https = require('https');


module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: 1337,
  url: 'https://localhost:1337',
  app: {
    keys: env.array('APP_KEYS'),
  },
  https: {
    key: fs.readFileSync(path.resolve(__dirname, '../certs/localhost-key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, '../certs/localhost.pem')),
  },
});

