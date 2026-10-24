'use strict'

var assert = require('node:assert')

describe('node runtime floor', function(){
  it('requires Node 24 or newer', function(){
    var majorVersion = Number(process.versions.node.split('.')[0])
    if (majorVersion < 24) {
      this.skip()
    }
    assert.ok(majorVersion >= 24)
  })
})
