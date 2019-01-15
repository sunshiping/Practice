const book = {
  isAuthenticated: state => state.book.isAuthenticated,
  user: state => state.book.user,
  openId: state => state.book.openId,
  lessonInfo: state => state.book.lessonInfo,
}
export default book
