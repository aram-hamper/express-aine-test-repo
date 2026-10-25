'use strict'

var assert = require('node:assert')

describe('node runtime floor', function () {
  it('should require Node.js 24 or newer', function () {
    var nodeVersion = process.versions.node
    var majorVersion = parseInt(nodeVersion.split('.')[0], 10)
    assert.ok(majorVersion >= 24, 'Node.js version ' + nodeVersion + ' is below the required minimum of 24.x')
  })
})
