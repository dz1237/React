// import JsonP from 'jsonp'
// import { options } from 'less';
// export default class Axios {
//     static jsonp() {
//         return new Promise((resolve, reject) => {
//             JsonP(options.url, {
//                 param: 'callback'
//             }, function (err, response) {
//                 if (response.status === 'success') {
//                     resolve(response)
//                 }
//                 else {
//                     reject(response.message);
//                 }
//             })
//         })
//     }
// }
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
}
