'use strict'

var assert = require('node:assert')
var express = require('../');
var request = require('supertest');
var requestLogger = require('../examples/pr384-request-logging/middleware');

describe('examples/pr384-request-logging', function () {
  function buildApp(records) {
    var app = express();

    app.use(requestLogger(function (record) {
      records.push(record);
    }));

    app.get('/hello', function (req, res) {
      res.send('Hello World');
    });

    return app;
  }

  it('records one successful route', function (done) {
    var records = [];
    var app = buildApp(records);

    request(app)
    .get('/hello')
    .expect(200, 'Hello World', function (err) {
      if (err) return done(err);
      assert.strictEqual(records.length, 1);
      assert.strictEqual(records[0].method, 'GET');
      assert.strictEqual(records[0].path, '/hello');
      assert.strictEqual(records[0].status, 200);
      assert.strictEqual(typeof records[0].durationMs, 'number');
      done();
    });
  });

  it('records a 404 for an unknown route', function (done) {
    var records = [];
    var app = buildApp(records);

    request(app)
    .get('/does-not-exist')
    .expect(404, function (err) {
      if (err) return done(err);
      assert.strictEqual(records.length, 1);
      assert.strictEqual(records[0].method, 'GET');
      assert.strictEqual(records[0].path, '/does-not-exist');
      assert.strictEqual(records[0].status, 404);
      done();
    });
  });

  it('invokes the callback exactly once per completed response', function (done) {
    var records = [];
    var app = buildApp(records);

    request(app)
    .get('/hello')
    .expect(200, function (err) {
      if (err) return done(err);
      // Give any stray async callbacks a chance to fire before asserting.
      setImmediate(function () {
        assert.strictEqual(records.length, 1);
        done();
      });
    });
  });

  it('never records secret query parameters', function (done) {
    var records = [];
    var app = buildApp(records);

    request(app)
    .get('/hello?token=supersecret&password=hunter2')
    .expect(200, function (err) {
      if (err) return done(err);
      assert.strictEqual(records.length, 1);
      assert.strictEqual(records[0].path, '/hello');
      var serialized = JSON.stringify(records[0]);
      assert.strictEqual(serialized.indexOf('supersecret'), -1);
      assert.strictEqual(serialized.indexOf('hunter2'), -1);
      assert.strictEqual(serialized.indexOf('token'), -1);
      done();
    });
  });
})
