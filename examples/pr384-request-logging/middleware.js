'use strict'

/**
 * Module dependencies.
 */

var onFinished = require('on-finished');
var parseUrl = require('parseurl');

/**
 * Create an opt-in request logging middleware.
 *
 * The returned middleware invokes `callback` once, when the response finishes,
 * with a small record describing the request and its outcome. The record only
 * contains the HTTP method, the request path (without the query string), the
 * response status code and the elapsed duration in milliseconds.
 *
 * For privacy, the record never includes request bodies, the `Authorization`
 * header, cookies or the query string.
 *
 * @param {Function} callback called once per completed response with a record
 * @return {Function} Express middleware
 * @public
 */

module.exports = function requestLogger(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  return function requestLogging(req, res, next) {
    var start = process.hrtime();

    onFinished(res, function () {
      var diff = process.hrtime(start);
      var durationMs = (diff[0] * 1e3) + (diff[1] / 1e6);

      // parseUrl().pathname strips the query string, so secrets in the query
      // never reach the log record.
      var pathname = parseUrl(req).pathname;

      callback({
        method: req.method,
        path: pathname,
        status: res.statusCode,
        durationMs: durationMs
      });
    });

    next();
  };
};
