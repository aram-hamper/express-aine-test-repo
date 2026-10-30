'use strict'

/**
 * Module dependencies.
 */

var express = require('../../');
var requestLogger = require('./middleware');

var app = module.exports = express();

// Opt in to request logging. The callback receives one record per completed
// response. Here we simply print it, but you could forward it to any logger.
app.use(requestLogger(function (record) {
  console.log('%s %s -> %d (%sms)',
    record.method,
    record.path,
    record.status,
    record.durationMs.toFixed(1));
}));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/users/:id', function (req, res) {
  res.json({ id: req.params.id });
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
