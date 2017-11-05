export const NETWORKS = {
  '1': 'Main Net',
  '2': 'Deprecated Morden test network',
  '3': 'Ropsten test network',
  '4': 'Rinkeby test network',
  '42': 'Kovan test network',
  '666': 'Private Test Network'
}

export const APPROVED_NETWORK_ID = '3'

export const MUTATION_TYPES = {
  CHANGE_CURRENT_ROUTE_TO: 'changeCurrentRouteTo',
  REGISTER_WEB3_INSTANCE: 'registerWeb3Instance',
  UPDATE_USER_BLOCKCHAIN_STATUS: 'updateUserBlockchainStatus',
  UPDATE_WEB3_PROPERTIES: 'updateWeb3Properties',
  LOGIN: 'login',
  LOGOUT: 'logout'
}

export const ACTION_TYPES = MUTATION_TYPES
