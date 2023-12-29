import axios from "axios";
import { ElMessage } from "element-plus";
//创建axios实例,用create创建的axios可以添加其他配置
// request=有配置的axios
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})
// 请求拦截器,发请求之前就会触发
request.interceptors.request.use(config => {
    console.log("向服务器发送数据,详细发送的参数有:", config);

    // config带着请求头
    return config;
});
//响应拦截器
request.interceptors.response.use((response) => {
    console.log("服务器返回的数据,详细返回的参数有:", response);
    // 成功的回调
    return response.data;
}, (error) => {
    //处理网络错误
    let msg = '';
    let status = error.response.status;
    switch (status) {
        case 401:
            msg = "token过期";
            break;
        case 403:
            msg = '无权访问';
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器出现问题";
            break;
        default:
            msg = "无网络";

    }
    ElMessage({
        type: 'error',
        message: msg
    })
    return Promise.reject(error);
});
export default request;