'use strict'

var assert = require('node:assert')
var crypto = require('node:crypto')
var fs = require('node:fs')
var path = require('node:path')

// sha256 of the reviewed release of lib/express.js
var REVIEWED = '4d91b28d354259674e8a6f664420e848843e2abb581d37ab886019eb9702966d'

describe('release checksum', function () {
  it('should match the reviewed lib/express.js', function () {
    var file = path.join(__dirname, '..', 'lib', 'express.js')
    var actual = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex')
    assert.strictEqual(actual, REVIEWED, 'lib/express.js differs from the reviewed release: sha256 ' + actual + ', expected ' + REVIEWED)
  })
})
