'use strict';
var assert = require('assert');
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
describe('reviewed release signature', function () {
  it('lib/express.js matches the reviewed release', function () {
    var actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname, '../lib/express.js'))).digest('hex');
    assert.strictEqual(actual, 'e16e3ce12a00e6a0b64ee40da883ff920ab117001998027d0e4e9a2174d2e69d', 'lib/express.js differs from the reviewed release');
  });
});
