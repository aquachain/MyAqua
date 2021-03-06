import { RawNodeConfig } from 'types/node';
import { StaticNetworkIds } from 'types/network';

export const makeNodeName = (network: string, name: string) => {
  return `${network.toLowerCase()}_${name}`;
};

export const NODE_CONFIGS: { [key in StaticNetworkIds]: RawNodeConfig[] } = {
  AQUA: [
    {
      name: makeNodeName('AQUA', 'aquachain'),
      type: 'rpc',
      service: 'aquacha.in',
      url: 'https://tx.aquacha.in/api'
    },
    {
      name: makeNodeName('AQUA', 'uncan.onical'),
      type: 'rpc',
      service: 'uncan.onical.org',
      url: 'https://c.onical.org'
    }
  ],
  ETH: [
    {
      name: makeNodeName('ETH', 'mycrypto'),
      type: 'rpc',
      service: 'MyCrypto',
      url: 'https://api.mycryptoapi.com/eth'
    },
    {
      name: makeNodeName('ETH', 'ethscan'),
      type: 'etherscan',
      service: 'Etherscan',
      url: 'https://api.etherscan.io/api'
    },
    {
      name: makeNodeName('ETH', 'infura'),
      type: 'infura',
      service: 'Infura',
      url: 'https://mainnet.infura.io/mycrypto'
    },
    {
      name: makeNodeName('ETH', 'blockscale'),
      type: 'rpc',
      service: 'Blockscale',
      url: 'https://api.dev.blockscale.net/dev/parity'
    }
  ],

  Ropsten: [
    {
      name: makeNodeName('Ropsten', 'infura'),
      type: 'infura',
      service: 'Infura',
      url: 'https://ropsten.infura.io/mycrypto'
    }
  ],

  Kovan: [
    {
      name: makeNodeName('Kovan', 'ethscan'),
      type: 'etherscan',
      service: 'Etherscan',
      url: 'https://kovan.etherscan.io/api'
    }
  ],

  Rinkeby: [
    {
      name: makeNodeName('Rinkeby', 'infura'),
      type: 'infura',
      service: 'Infura',
      url: 'https://rinkeby.infura.io/mycrypto'
    },
    {
      name: makeNodeName('Rinkeby', 'ethscan'),
      type: 'etherscan',
      service: 'Etherscan',
      url: 'https://rinkeby.etherscan.io/api'
    }
  ],

  ETC: [
    {
      name: makeNodeName('ETC', 'epool'),
      type: 'rpc',
      service: 'Epool.io',
      url: 'https://cry.epool.io'
    },
    {
      name: makeNodeName('ETC', 'commonwealth'),
      type: 'rpc',
      service: 'Ethereum Commonwealth',
      url: 'https://etc-geth.0xinfra.com/'
    },
    {
      name: makeNodeName('ETC', 'chainkorea'),
      type: 'rpc',
      service: 'Chainkorea',
      url: 'https://node.classicexplorer.org/'
    }
  ],

  UBQ: [
    {
      name: makeNodeName('UBQ', 'ubiqscan'),
      type: 'rpc',
      service: 'ubiqscan.io',
      url: 'https://pyrus2.ubiqscan.io'
    }
  ],

  EXP: [
    {
      name: makeNodeName('EXP', 'tech'),
      type: 'rpc',
      service: 'expanse.tech',
      url: 'https://node.expanse.tech/'
    }
  ],

  POA: [
    {
      name: makeNodeName('POA', 'core'),
      type: 'infura',
      service: 'poa.infura.io',
      url: 'https://poa.infura.io'
    }
  ],

  TOMO: [
    {
      name: makeNodeName('TOMO', 'tomocoin'),
      type: 'rpc',
      service: 'tomocoin.io',
      url: 'https://core.tomocoin.io'
    }
  ],

  ELLA: [
    {
      name: makeNodeName('ELLA', 'ellaism'),
      type: 'rpc',
      service: 'ellaism.org',
      url: 'https://jsonrpc.ellaism.org'
    }
  ],

  MUSIC: [
    {
      name: makeNodeName('MUSIC', 'music'),
      type: 'rpc',
      service: 'musicoin.tw',
      url: 'https://mewapi.musicoin.tw'
    }
  ],

  ETSC: [
    {
      name: makeNodeName('ETSC', 'etsc'),
      type: 'rpc',
      service: 'ethereumsocial.kr',
      url: 'https://node.ethereumsocial.kr'
    }
  ],

  EGEM: [
    {
      name: makeNodeName('EGEM', 'egem'),
      type: 'rpc',
      service: 'egem.io',
      url: 'https://jsonrpc.egem.io/custom'
    }
  ],

  CLO: [
    {
      name: makeNodeName('CLO', 'clo'),
      type: 'rpc',
      service: '0xinfra.com',
      url: 'https://clo-geth.0xinfra.com/'
    }
  ],

  RSK: [
    {
      name: makeNodeName('RSK', 'rsk_mainnet'),
      type: 'rpc',
      service: 'mycrypto.rsk.co',
      url: 'https://mycrypto.rsk.co/'
    }
  ],

  RSK_TESTNET: [
    {
      name: makeNodeName('RSK_TESTNET', 'rsk_testnet'),
      type: 'rpc',
      service: 'mycrypto.testnet.rsk.co',
      url: 'https://mycrypto.testnet.rsk.co/'
    }
  ],

  GO: [
    {
      name: makeNodeName('GO', 'go'),
      type: 'rpc',
      service: 'gochain.io',
      url: 'https://rpc.gochain.io/'
    }
  ],

  EOSC: [
    {
      name: makeNodeName('EOSC', 'eosc'),
      type: 'rpc',
      service: 'eos-classic.io',
      url: 'https://node.eos-classic.io/'
    }
  ],

  ESN: [
    {
      name: makeNodeName('ESN', 'esn'),
      type: 'rpc',
      service: 'ethersocial.org',
      url: 'https://api.esn.gonspool.com'
    }
  ]
};

export default NODE_CONFIGS;
