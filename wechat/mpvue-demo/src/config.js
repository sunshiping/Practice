// 配置项
const env = {
  name: '蜗牛图书',
  host: 'http://127.0.0.1:5757',
  appid: 'wx686871f406673a5b',
  secret: 'e4f904d79a80efd0c478013719fe79fc'
}
const host = 'http://127.0.0.1:5757'
const config = {
  env,
  host,
  loginUrl: `${host}/weapp/login`
}

export default config
