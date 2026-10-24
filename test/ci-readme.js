'use strict'

var assert = require('assert')
var fs = require('fs')
var path = require('path')

// Stand-in check for a Fjorge auto-fix live test: it runs only in CI.
describe('Readme.md (CI only)', function () {
  before(function () {
    if (!process.env.CI) this.skip()
  })

  it('should list the supported Node.js versions', function () {
    var readme = fs.readFileSync(path.join(__dirname, '..', 'Readme.md'), 'utf8')
    assert.ok(/Supported Node\.js versions: 18 to 26/.test(readme),
      'Readme.md must contain the line "Supported Node.js versions: 18 to 26"')
  })
})
