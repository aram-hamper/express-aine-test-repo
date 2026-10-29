'use strict';
var assert = require('assert');
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
describe('reviewed release signature', function () {
  it('lib/express.js matches the reviewed release', function () {
    var actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname, '../lib/express.js'))).digest('hex');
    assert.strictEqual(actual, 'ac5fbcfb07ee2e3f2c3a40b4d2b5cc935643aee92b6cf1a7cae4c4bddf93ccb0', 'lib/express.js differs from the reviewed release');
  });
});
