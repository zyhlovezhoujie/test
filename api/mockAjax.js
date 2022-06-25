//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css"
// import { config } from "vue/types/umd";
//1 利用axios对象的方法create ，创建一个axios实列
//2 request 就是axios，只不过稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路径，发请求时，路径自动出现/api
    baseURL:"/mock",
    //代表请求超时的时间5s
    timeout:5000
});

//请求拦截器
requests.interceptors.request.use((config)=>{
  nprogress.start()  
  return config;
})
//响应拦截器
// axios.interceptors.request.use((config) => {
//     if(config.method === 'post') {
//       config.data = qs.stringify(config.data);
//     }
//     nprogress.done()
//       return config;  //添加这一行
//   }, (error) => {
//     return Promise.reject(error);
// })
//响应拦截器
requests.interceptors.response.use((res)=>{
  nprogress.done()
  return res.data;
},(error)=>{
  return Promise.reject(error);
})
export default requests;