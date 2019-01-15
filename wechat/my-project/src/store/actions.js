const actions = {
  setIsAuthenticated: ({ commit }, data) => {
    return commit('SET_IS_AUTH', data)
  },
  setUser: ({ commit }, data) => {
    return commit('SET_USER', data)
  },
  setOpenId: ({ commit }, data) => {
    return commit('SET_OPEN_ID', data)
  },
  setLessonInfo: ({ commit }, data) => {
    return commit('SET_LESSON_INFO', data)
  },
};
export default actions
