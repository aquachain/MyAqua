import { networkIdToName } from 'libs/values';
import { TypeKeys as WalletTypeKeys } from 'actions/wallet/constants';
import { Web3Wallet } from 'libs/wallet';
import { SagaIterator } from 'redux-saga';
import { select, put, takeEvery, call } from 'redux-saga/effects';
import { changeNodeIntent, TypeKeys, web3SetNode } from 'actions/config';
import { getNodeId, getStaticAltNodeToWeb3 } from 'selectors/config';
import { setupWeb3Node, Web3Service } from 'libs/nodes/web3';
import { Web3NodeConfig } from '../../shared/types/node';

export function* initWeb3Node(): SagaIterator {
  const { networkId, lib } = yield call(setupWeb3Node);
  const config: Web3NodeConfig = {
    isCustom: false,
    network: networkIdToName(networkId),
    service: Web3Service,
    lib,
    estimateGas: false,
    hidden: true
  };

  yield put(web3SetNode({ id: 'web3', config }));
}

// unset web3 as the selected node if a non-web3 wallet has been selected
export function* unsetWeb3NodeOnWalletEvent(action): SagaIterator {
  const node = yield select(getNodeId);
  const newWallet = action.payload;
  const isWeb3Wallet = newWallet instanceof Web3Wallet;

  if (node !== 'web3' || isWeb3Wallet) {
    return;
  }

  const altNode = yield select(getStaticAltNodeToWeb3);
  // switch back to a node with the same network as MetaMask/Mist
  yield put(changeNodeIntent(altNode));
}

export function* unsetWeb3Node(): SagaIterator {
  const node = yield select(getNodeId);

  if (node !== 'web3') {
    return;
  }

  const altNode = yield select(getStaticAltNodeToWeb3);
  // switch back to a node with the same network as MetaMask/Mist
  yield put(changeNodeIntent(altNode));
}

export const web3 = [
  takeEvery(TypeKeys.CONFIG_NODE_WEB3_SET, initWeb3Node),
  takeEvery(TypeKeys.CONFIG_NODE_WEB3_UNSET, unsetWeb3Node),
  takeEvery(WalletTypeKeys.WALLET_SET, unsetWeb3NodeOnWalletEvent),
  takeEvery(WalletTypeKeys.WALLET_RESET, unsetWeb3NodeOnWalletEvent)
];
