const stringifyObject = require('stringify-object')

const indent = '    '

module.exports = function web3ContractLoader (content) {
  'use strict'
  try {
    const abi = JSON.parse(content)
    const stringifiedObject = stringifyObject(abi, {indent, singleQuotes: false})
    return (
      'import Web3EthContract from "web3-eth-contract";\n' +
      'export default new Web3EthContract(\n' +
      stringifiedObject.split('\n').map((line) => indent + line).join('\n') +
      '\n);\n'
    )
  } catch (e) {
    this.emitError(e)
  }
}
