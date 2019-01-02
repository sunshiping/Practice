const book = {
  state: {
    test: 1
  },
  mutations: {
    'SET_TEST': (state, test) => {
      state.test = test
    }
  },
  actions: {
    setTest: ({ commit, state }, test) => {
      return commit('SET_TEST', test)
    }
  }
}
export default book
