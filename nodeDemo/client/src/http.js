import axios from 'axios';
import { Message,Loading } from 'element-ui';
import router from './router';

let loading;
function startLoading(){
  loading = Loading.service({
    lock:true,
    text:'拼命加载中...',
    background:'rgba(0,0,0,.7)'
  })
}
function endLoading(){
  loading.close();
}


axios.interceptors.request.use(config => {
  // startLoading();

  if(localStorage.eleToken){
    // 设置统一的请求header
    config.headers.Authorization = localStorage.eleToken;
  }

  return config;
},error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  // endLoading();
  return response;
},error => {
  // endLoading();
  Message.error(error.response.data);
  // 获取错误状态码
  const {status} = error.response;
  if(status == 401){
    // Message.error('token失效，请重新登录');
    Message.error('请重新登录');
    // 清除token
    localStorage.removeItem('eleToken');
    router.push('/login');
  }
  return Promise.reject(error);
});


export default axios;
