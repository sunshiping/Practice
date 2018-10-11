const {mysql} = require('../qcloud')
// 新增图书
// 1. 获取豆瓣信息
// https://developers.douban.com/wiki/?title=book_v2#get_isbn_book
// https://api.douban.com/v2/book/isbn/9787536692930
// 2. 入库
module.exports = async (ctx) => {
    const books = await mysql('books').select('*').orderBy('id', 'desc')
    ctx.state.data = {
        list: books
    }
}
