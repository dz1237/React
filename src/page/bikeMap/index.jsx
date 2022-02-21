import React, { Component } from "react";
import axios from '../../axios/index1'
import { Card } from 'antd'
import BaseForm from '../../components/BaseForm/index'

export default class bikeMap extends Component {
    state = {

    }
    map = ""
    componentWillMount() {
        this.requestList()
    }
    formList = [
        {
            type: '城市',
            initialValue: '0',
        },
        {
            type: '时间查询'
        }, {
            type: 'SELECT',
            label: '订单状态',
            field: 'order_status',
            placeholder: "全部",
            initialValue: '0',
            list: [{
                id: '0',
                name: "全部"
            },
            {
                id: '1',
                name: "进行中"
            },
            {
                id: '2',
                name: "行程结束"
            }]
        }
    ]
    //查询表单
    requestList = () => {
        axios.ajax({
            url: '/map/bike_list',
            data: {
                params: this.params
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    total_count: res.result.total_count
                })
                this.renderMap(res)
            }
        })
    }
    handleFilterSubmit = (filterParams) => {
        this.params = filterParams;
        this.requestList()
    }
    //渲染地图数据
    renderMap = (res) => {
        let list = res.result.route_list;
        this.map = new window.BMapGL.Map("container");
        let gps1 = list[0].split(',');
        let gps2 = list[list.length - 1].split(',');
        let startPoint = new window.BMapGL.Point(gps1[0], gps1[1])
        let endPoint = new window.BMapGL.Point(gps2[0], gps2[1])
        this.map.centerAndZoom(endPoint, 11);


        //车辆起点
        let startPointIcon = new window.BMapGL.Icon('/assets/start_point.png', new window.BMapGL.Size(36, 42), {
            imageSize: new window.BMapGL.Size(36, 42)
        })
        let startMarker = new window.BMapGL.Marker(startPoint, { icon: startPointIcon });
        this.map.addOverlay(startMarker);
        //车辆终点

        let endPointIcon = new window.BMapGL.Icon("/assets/end_point.png", new window.BMapGL.Size(36, 42), {
            imageSize: new window.BMapGL.Size(36, 42),
            anchor: new window.BMapGL.Size(18, 42)
        })
        let endMarker = new window.BMapGL.Marker(endPoint, { icon: endPointIcon });
        this.map.addOverlay(endMarker);


        //绘制行驶路线
        let routeList = [];
        list.forEach(item => {
            let p = item.split(',')
            routeList.push(new window.BMapGL.Point(p[0], p[1]))
        })
        let polyLine = new window.BMapGL.Polyline(routeList, {
            strokeColor: "#ef4136",
            strokeWeight: 3,
            strokeOpacity: 1
        })
        this.map.addOverlay(polyLine)
        //绘制服务区
        let serverPointList = [];
        let serverList = res.result.service_list;
        serverList.forEach(item => {
            serverPointList.push(new window.BMapGL.Point(item.lon, item.lat))
        })
        let polyServerLine = new window.BMapGL.Polyline(serverPointList, {
            strokeColor: "#000136",
            strokeWeight: 4,
            strokeOpacity: 1
        })
        this.map.addOverlay(polyServerLine)

        //添加自行车图标
        let bikeList = res.result.bike_list
        let bikeIcon = new window.BMapGL.Icon('/assets/bike.jpg', new window.BMapGL.Size(36, 42), {
            imageSize: new window.BMapGL.Size(36, 42),
            anchor: new window.BMapGL.Size(36, 42)
        })
        bikeList.forEach(item => {
            let p = item.split(',')
            let point = new window.BMapGL.Point(p[0], p[1]);
            let bikeMarker = new window.BMapGL.Marker(point, { icon: bikeIcon })
            this.map.addOverlay(bikeMarker);
        })

    }
    render() {
        return (
            <div className="card-warp">
                <Card>
                    <BaseForm formList={this.formList} filterSumbit={this.handleFilterSubmit} />
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <div>
                        共{this.state.total_count}辆车
                    </div>
                    <div id="container" style={{ height: 500 }}>

                    </div>
                </Card>
            </div>

        )
    }
}