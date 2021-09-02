require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note oven proof gesture nasty food genuine'; 
let testAccounts = [
"0x958564399ad8da6fe9041a83e53c70ae57a47759efdfbb749b671bd531eab747",
"0x3a3233250ff6acb51c0e8192d8e97a260be85817917e151379f05ec8f94a7001",
"0x14f979ddf71c3840fb485ac7f5718918d4cf784e1886f215200e846d32081f84",
"0x146a11c98fe6f4e7972ac036241f595f8b96ed5d7037ec8a7e9fdfa66f0475a1",
"0xf781315c9ec0f82a2eb1ddfb0fab34853618a0d9ee5ab2a7d58dbe46075c34e2",
"0x5a478267713e86a97fc01569863b1d4f84b05cb1307a5073f0d6e457ce286c50",
"0xc966cf917d9c0c4c259e68ced82f8a1dc802bf5c694da0c34896598817815d47",
"0x4dc95ce767f92ce7af576534bc579c3db5ceb6535fa84aa1a491fccc43b883e8",
"0xc11b3e150444498537a1e726c8874ca8b7665082c299edbf65c28604a0dc6917",
"0x0042c6ecceb4cef2dddda68a3c1a427cc962e3c864b0d0ecf1d8dc7d705ee6d5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


