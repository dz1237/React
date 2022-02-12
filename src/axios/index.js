import axios from 'axios'
import JsonP from 'jsonp'
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback',    //因为是跨域的，所以用callback接收
            }, function (err, response) {
                //to-do
                if (response.status === "200") {
                    resolve(response)
                } else {
                    resolve(reject.message)
                }
                // 根据不同的后台接口，使用不同的判断方法，也可以直接使用axios访问
            })
        })
    }
    static ajax(options) {
        let baseApi = 'http://106.75.229.98:7300/mock/620713e7989bbf232e93deeb/mockapi'
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (response.status === 200) {
                    let res = response.data;
                    if (res.code === 0) {

                    }
                }
                else {
                    reject(response.data)
                }
            })
        });
    }
}
