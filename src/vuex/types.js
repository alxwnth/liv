const mutations = {
  // root
  POP_STATE: 'POP_STATE',
  CLEAR_STATE: 'CLEAR_STATE',

  // auth
  SET_JWT_TOKEN: 'SET_JWT_TOKEN',

  // account
  SET_ACCOUNT: 'SET_ACCOUNT',
}

const actions = {
  // root
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',

  // auth
  LOAD_JWT_TOKEN: 'LOAD_JWT_TOKEN',

  // account
  LOAD_ACCOUNT: 'LOAD_ACCOUNT'
}

const getters = {
  // root
  isLoggedIn: 'isLoggedIn',

  // auth

  jwtToken: 'jwtToken',

  // account
  account: 'account',
}

export const vuexTypes = {
  ...mutations,
  ...actions,
  ...getters
}
