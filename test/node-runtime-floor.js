'use strict'

var assert = require('node:assert')

describe('node runtime floor', function () {
  it('should be Node 24 or newer', function () {
    var nodeVersion = process.versions.node
    var majorVersion = parseInt(nodeVersion.split('.')[0], 10)
    if (majorVersion < 24) {
      this.skip()
    }
    assert.ok(majorVersion >= 24, 'Node version must be 24 or newer, got ' + nodeVersion)
  })
})
