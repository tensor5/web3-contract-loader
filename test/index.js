/* global describe it */

const assert = require('assert')
const {readFileSync} = require('fs')
const {runLoaders} = require('loader-runner')
const {dirname, join, resolve} = require('path')

const loaderPath = resolve(join(dirname(__dirname), 'index.js'))

describe('ABI', function () {
  it('should generate a JavaScript module from contract ABI', (done) => {
    const abiPath = join(__dirname, 'abi/test01.json')
    const expectedModule = readFileSync(join(__dirname, 'abi/expected01.js'), 'utf8')

    runLoaders({
      resource: abiPath,
      loaders: [loaderPath],
      context: {
        emitError: console.error,
        emitWarning: console.warn
      }
    }, (err, res) => {
      if (err) {
        return done(err)
      }
      try {
        assert.equal(
          res.result[0],
          expectedModule
        )
        done()
      } catch (e) {
        done(e)
      }
    })
  })
})
