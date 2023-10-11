import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Axios } from 'axios';

class Http extends Axios {
  constructor() {
    super()
  }

  setContentType() {
    Object.assign(this, {
      defaults: {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    })
    return this
  }
}

// 创建 JsonContentTypeAxios 实例
const instance = new Http();


// // 添加响应拦截器
// instance.interceptors.response.use(
//   // 成功响应的处理
//   function (response) {
//     // 对响应数据进行处理，例如添加通用的响应头或者预处理数据
//     const modifiedResponse = response.data;

//     return modifiedResponse;
//   },
//   // 错误响应的处理
//   function (error) {
//     // 对响应错误进行处理，例如捕获错误、显示错误信息、或者进行重定向
//     console.error('请求发生错误:', error);

//     return Promise.reject(error);
//   }
// );

export default instance