require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remember mistake inner nasty flower spy'; 
let testAccounts = [
"0xbec763e2872d0edb0ecad9472246e5b4c269660348a4d16c74bd0dc35aaad086",
"0xec6ea67332a5298399b09734d4761718012b35b0d2032cfe45c6a733723a47e2",
"0xafa7ba4055ce59b23d1f2190bfdd1333298f21056bbbd1b02bc4610476f48b2a",
"0x864f023700fcb967b66f9bcc1c9a254a1ad3b24a12a85f545ba75a96a58ed7f5",
"0xa9573abbf0f6f3355ac02c616a96851b4557ebdbfd2fa3a5b0e26abbdb622d90",
"0xd3c3a5d679e3ee96d4289333f2798eedd4245b0480a895ba6560be178480763b",
"0xecacf8d07a8763ceff6ca511e0116f92594a23cf2c6b6e787a6390c1911394ca",
"0xa9688fba58f3e6b6d93e7a2f5fbe88ee93c75940fc82927af02a062fbc491e22",
"0x93104d59ad0fab907bf79ca4ab9e93f3efbb8a5c30092b34da62ded1ea786b9b",
"0x385d39677c1651126dafad1d43a9ef5e9b47490487880082a13845484843c224"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

