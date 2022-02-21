import axios from 'axios'
import JsonP from 'jsonp'
import { Modal } from 'antd'
import Utils from '../utils/utils'
export default class Axios {


    // static requestList(_this, url, params) {

    //     var data = {
    //         params,
    //     }
    //     this.ajax({
    //         url,
    //         data,
    //     }).then(data => {
    //         if (data.code === 0) {
    //             let dataSource = data.result.item_list.map((item, index) => {
    //                 item.key = index;

    //                 return item
    //             })

    //             _this.setState({

    //                 dataSource,
    //                 // selectedRowKeys:[],
    //                 pagination: Utils.pagination(data, current => {
    //                     console.log("das")
    //                     _this.params.page = current;
    //                     _this.requestList()

    //                 })
    //             })

    //         }
    //     })
    // }
    static requestList(_this, url, params, isMock) {
        var data = {
            params,
            isMock
        }
        this.ajax({
            url,
            data,
        }).then(res => {
            if (res.code === 0) {
                let dataSource = res.result.item_list.map((item, index) => {
                    item.key = index;
                    return item
                })
                _this.setState({
                    dataSource,
                    // selectedRowKeys:[],
                    pagination: Utils.pagination(res, current => {
                        _this.params.page = current;
                        _this.requestList()
                    })
                })
            }
        })
    }

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
        let loading;
        if (options.data && options.data.isShowLodaing !== false) {
            loading = document.getElementById("ajaxLoading");
            loading.style.display = "block"
        }
        // let baseApi = 'https://mobile-ms.uat.homecreditcfc.cn/mock/6210640d0b5aa1002717e9ff/example_copy'
        let baseApi = ''
        if (options.data.isMock) {
            baseApi = "https://mobile-ms.uat.homecreditcfc.cn/mock/6210640d0b5aa1002717e9ff/example_copy";
        } else {
            baseApi = "https://mobile-ms.uat.homecreditcfc.cn/mock/6210640d0b5aa1002717e9ff/example_copy";
        }
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (options.data && options.data.isShowLodaing !== false) {
                    loading = document.getElementById("ajaxLoading");
                    loading.style.display = "none"
                }
                if (response.status === 200) {
                    let res = response.data;
                    if (res.code === 0) {
                        resolve(res)
                    } else {
                        Modal.info({
                            title: "提示",
                            content: res.msg
                        })
                    }
                }
                else {
                    reject(response.data)
                }
            })
        });
    }
}
