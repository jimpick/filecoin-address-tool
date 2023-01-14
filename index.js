#!/usr/bin/env node

const { randomBytes } = require('crypto')
const { newDelegatedEthAddress } = require('@glif/filecoin-address')
const { ethers } = require('ethers')
const parser = require('yargs-parser')

const argv = parser(
  process.argv.slice(2),
  {
    boolean: [ 'testnet' ],
    configuration: {
      'parse-numbers': false
    }
  }
)

function usage () {
  console.error('Usage: filecoin-address-tool delegate-address-from-eth-address [--testnet] <eth-address>')
  console.error('       filecoin-address-tool generate-random-eth-private-key')
  console.error('       filecoin-address-tool eth-address-from-eth-private-key <eth-private-key-hex>')
  console.error('       filecoin-address-tool eth-address-from-id-address <f0 or t0 address>')
  process.exit(1)
}

switch (argv._[0]) {
  case 'delegate-address-from-eth-address':
    const hex = '0x' + (argv._[1].replace('0x', ''))
    console.log(newDelegatedEthAddress(hex, argv.testnet ? 't' : 'f').toString())
    break;
  case 'generate-random-eth-private-key':
    console.log(randomBytes(32).toString("hex"))
    break;
  case 'eth-address-from-eth-private-key':
    const hex2 = argv._[1].replace('0x', '')
    const wallet = new ethers.Wallet(hex2)
    console.log(wallet.address.replace('0x', ''))
    break;
  case 'eth-address-from-id-address':
    const match = argv._[1].match(/^[ft]0([0-9]+)$/)
    if (!match) {
      console.error('Input must be f0... or t0... address')
      process.exit(1)
    }
    console.log('ff' + Number(match[1]).toString(16).padStart(38, '0'))
    break;
  default:
    usage()
}
