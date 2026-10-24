'use strict'

var assert = require('node:assert')

describe('node runtime floor', function(){
  it('requires Node 24 or newer', function(){
    assert.ok(Number(process.versions.node.split('.')[0]) >= 24)
  })
})
