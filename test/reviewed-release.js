'use strict';
var assert = require('assert');
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
describe('reviewed release signature', function () {
  it('lib/express.js matches the reviewed release', function () {
    var actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname, '../lib/express.js'))).digest('hex');
    assert.strictEqual(actual, 'ee81b7ffcec6204cad4cdf4759bcdec22c9204c35b9bc0fe3acc1e9f7959a7f9', 'lib/express.js differs from the reviewed release');
  });
});
