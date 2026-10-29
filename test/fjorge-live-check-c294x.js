'use strict'

var assert = require('node:assert')
var fjorgeLiveCheck = require('../src/fjorge-live-check-c294x')

describe('fjorgeLiveCheck', function () {
  it('should export a function', function () {
    assert.strictEqual(typeof fjorgeLiveCheck, 'function')
  })

  it('should return "ok"', function () {
    var result = fjorgeLiveCheck()
    assert.strictEqual(result, 'ok')
  })

  it('should always return "ok" on multiple calls', function () {
    assert.strictEqual(fjorgeLiveCheck(), 'ok')
    assert.strictEqual(fjorgeLiveCheck(), 'ok')
    assert.strictEqual(fjorgeLiveCheck(), 'ok')
  })
})
