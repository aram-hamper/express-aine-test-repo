'use strict';
var assert = require('assert');
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
describe('reviewed release signature', function () {
  it('lib/express.js matches the reviewed release', function () {
    var actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname, '../lib/express.js'))).digest('hex');
    assert.strictEqual(actual, '3f89a73dcf792e23354799e3daccdd09ede3f0b328140b4f8bbd94f9b82eb791', 'lib/express.js differs from the reviewed release');
  });
});
