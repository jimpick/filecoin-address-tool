filecoin-address-tool
===

A simple command-line tool to manipulate addresses used with Filecoin.

Install via `npm install -g filecoin-address-tool` or just use via `npx filecoin-address-tool`.

## Usage

```
$ npx filecoin-address-tool 
Usage: filecoin-address-tool delegate-address-from-eth-address [--testnet] <eth-address>
       filecoin-address-tool generate-random-eth-private-key
       filecoin-address-tool eth-address-from-eth-private-key <eth-private-key-hex>
       filecoin-address-tool eth-address-from-id-address <f0 or t0 address>
```

## Generate a random Ethereum private key

```
$ npx filecoin-address-tool generate-random-eth-private-key
3e004353b834821bb9f0ace719dbb0b484aaad20aaa8f5840ed3d0b5a9647175
```

(You may want to add a `0x` prefix to use this with some tools)

## Get the public Ethereum address from a private key

```
$ npx filecoin-address-tool eth-address-from-eth-private-key 3e004353b834821bb9f0ace719dbb0b484aaad20aaa8f5840ed3d0b5a9647175
ccA92338Ef9535cB7655CfC347c36dd4E6F3663f
```

(You may want to add a `0x` prefix to use this with some tools)

## Get the Filecoin f4 address for an Ethereum address

This will create a Filecoin address using the [f4 address class](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0048.md) based on the Ethereum address. This is useful if you want to transfer funds from a native Filecoin account.

```
$ npx filecoin-address-tool delegate-address-from-eth-address ccA92338Ef9535cB7655CfC347c36dd4E6F3663f
f410fzsusgohpsu24w5svz7bupq3n2ttpgzr7s5jap4i
```

If you are using a testnet, you can get a `t4...` address by setting the `--testnet` flag.

```
$ npx filecoin-address-tool delegate-address-from-eth-address --testnet ccA92338Ef9535cB7655CfC347c36dd4E6F3663f
t410fzsusgohpsu24w5svz7bupq3n2ttpgzr7s5jap4i
```

Uses [@glif/filecoin-address](https://www.npmjs.com/package/@glif/filecoin-address) to do the conversion.


## License

MIT or Apache2
