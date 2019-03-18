import axios from 'axios'
   
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
var loadinginstace
console.log("请求之前")
axios.interceptors.request.use(config => {
    // element ui Loading方法
console.log("开始请求")
    loadinginstace = Loading.service({ fullscreen: true })
    return config
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
console.log("请求成功")
    loadinginstace.close()
    return data
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载失败'
    })
    return Promise.reject(error)
})

export default axios