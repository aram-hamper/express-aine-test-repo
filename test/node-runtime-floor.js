'use strict'

var assert = require('node:assert')

describe('node runtime floor', function () {
  it('should be running Node.js 24 or newer', function () {
    var nodeVersion = process.versions.node
    var majorVersion = parseInt(nodeVersion.split('.')[0], 10)
    assert.ok(majorVersion >= 24, 'Node.js version ' + nodeVersion + ' is not 24 or newer')
  })
})
