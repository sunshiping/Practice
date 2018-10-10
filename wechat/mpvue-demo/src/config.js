// 配置项
const env = {
  name: '房信',
  title: '21世纪不动产郑州分公司',
  sub_title: '21世纪',
  version: '1.0.0',
  app_debug: true,
  app_env: 'production',
  app_local: 'zz',
  city: 'zhengzhou',
  mp_url: 'http://mp.fx.test',
  mp_pro_url: 'https://zz-m.1fangxin.net',
  company_id: 1,
  city_id: 159
}
const host = 'http://localhost:5757'
const config = {
  env,
  host,
  loginUrl: `${host}/weapp/login`
}

export default config
