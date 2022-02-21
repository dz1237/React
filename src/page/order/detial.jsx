import React, { Component } from 'react'
import { Card, } from 'antd'
import './index.less'
import axios from '../../axios/index1'
export default class Detial extends Component {
    state = {
        orderInfo: {}
    }
    componentDidMount() {
        let orderId = this.props.match.params.orderId
        if (orderId) {
            this.getDetialInfo(orderId);
            console.log(orderId)
        }
    }
    getDetialInfo = (orderId) => {
        axios.ajax({
            url: "/order/detail",
            data: {
                params: {
                    orderId: orderId
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    orderInfo: res.result
                })
                this.renderMap(res.result)
            }
        })
    }
    renderMap = (result) => {
        //创建map
        this.map = new window.BMapGL.Map('orderDetailMap', { enableMapClick: false })
        //设置中心点
        this.map.centerAndZoom(new window.BMapGL.Point(116.404, 39.915), 11);
        //家里地址 this.map.centerAndZoom(new window.BMapGL.Point(126.3832174680023, 46.604625660248544), 15)
        //鼠标滚轮缩放
        this.map.enableScrollWheelZoom(true);
        //添加地图控件
        this.addMapControl();
        //调用路线图绘制方法
        this.drawBikeRoute(result.position_list);
        //绘制服务区
        this.drawServiceArea(result.area)
    }
    //添加地图控件
    addMapControl = () => {
        let map = this.map;
        map.addControl(new window.BMapGL.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_LEFT }));
        map.addControl(new window.BMapGL.CityListControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }))
    }
    //绘制路线
    drawBikeRoute = (positionList) => {
        let map = this.map
        let startPoint = "";
        let endPoint = '';
        if (positionList.length > 0) {
            let first = positionList[0];
            let last = positionList[positionList.length - 1]
            startPoint = new window.BMapGL.Point(first.lon, first.lat);
            let startIcon = new window.BMapGL.Icon('/assets/start_point.png', new window.BMapGL.Size(36, 42), {
                imageSize: new window.BMapGL.Size(36, 42),
                anchor: new window.BMapGL.Size(36, 42)
            });
            let startMarker = new window.BMapGL.Marker(startPoint, { icon: startIcon })
            map.addOverlay(startMarker);
            endPoint = new window.BMapGL.Point(last.lon, last.lat)
            let endIcon = new window.BMapGL.Icon('/assets/end_point.png', new window.BMapGL.Size(36, 42),
                {
                    imageSize: new window.BMapGL.Size(36, 42),
                    anchor: new window.BMapGL.Size(36, 42)
                });
            let endMarker = new window.BMapGL.Marker(endPoint, { icon: endIcon })
            map.addOverlay(endMarker);
            //连接路线图
            let trackPoint = [];
            for (let i = 0; i < positionList.length; i++) {
                trackPoint.push(new window.BMapGL.Point(positionList[i].lon, positionList[i].lat))
            }
            let polyline = new window.BMapGL.Polyline(trackPoint, {
                strokeColor: "#123456",
                strokeWeight: 3,
                strokeOpacity: 1
            })
            map.addOverlay(polyline);
            map.centerAndZoom(endPoint, 11);

        }
    }
    //绘制服务区
    drawServiceArea = (area) => {
        let map = this.map;
        let trackPoint = [];
        for (let i = 0; i < area.length; i++) {
            let point = area[i];
            trackPoint.push(new window.BMapGL.Point(point.lon, point.lat))
        }
        let polygon = new window.BMapGL.Polygon(trackPoint, {
            strokeColor: "#CE0000",
            strokeWeight: 3,
            fillColor: "#ff8605",
            fillOpacity: 0.4
        });
        map.addOverlay(polygon);
    }

    render() {
        const { orderInfo } = this.state;
        console.log(orderInfo)
        return (
            <div >
                <Card className='card-warp'>
                    <div id='orderDetailMap' className='order-map'></div>
                    <div className="detial-item">
                        <div className="item-title">基本信息</div>
                        <ul className="detial-form">
                            <li>
                                <div className="detial-form-left">用车模式:</div>
                                <div className="detial-form-content">{orderInfo.mode === 1 ? "指定停车区模式" : "禁停区模式"}</div>
                            </li>
                            <li>
                                <div className="detial-form-left">订单编号:</div>
                                <div className="detial-form-content">{orderInfo.order_sn}</div>
                            </li>
                            <li>
                                <div className="detial-form-left">车辆编号:</div>
                                <div className="detial-form-content">{orderInfo.bike_sn}</div>
                            </li>
                            <li>
                                <div className="detial-form-left">用户姓名:</div>
                                <div className="detial-form-content">{orderInfo.user_name}</div>
                            </li>
                            <li>
                                <div className="detial-form-left">手机号码:</div>
                                <div className="detial-form-content">{orderInfo.mobile}</div>
                            </li>
                        </ul>
                    </div>
                </Card >
                <Card className='card-warp'>
                    <div id='orderDetailMap'></div>
                    <div className="detial-item">
                        <div className="item-title">行驶轨迹</div>
                        <ul className="detial-form">
                            <li>
                                <div className="detial-form-left">行驶起点:</div>
                                <div className="detial-form-content">{orderInfo.start_location}</div>
                            </li>
                            <li>
                                <div className="detial-form-left">行驶重点:</div>
                                <div className="detial-form-content">{orderInfo.end_location}</div>
                            </li>
                            <li>
                                <div className="detial-form-left">行驶里程:</div>
                                <div className="detial-form-content">{orderInfo.distance / 1000}公里</div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div >
        )
    }
}