const book = {
  state: {
    isAuthenticated: false,
    user: null,
    openId: '',
    lessonInfo: null
  },
  mutations: {
    'SET_IS_AUTH': (state, data) => {
      state.isAuthenticated = data
    },
    'SET_USER': (state, data) => {
      state.user = data
    },
    'SET_OPEN_ID': (state, data) => {
      state.openId = data
    },
    'SET_LESSON_INFO': (state, data) => {
      state.lessonInfo = data
    }
  }
}
export default book
