import React, { Component } from 'react'
import { Form, Select, Input, Button, DatePicker, Checkbox } from 'antd'
import Utils from '../../utils/utils'


class FilterForm extends Component {
    //查询方法
    handleFilterSubmit = () => {
        let fieldsValue = this.myForm.getFieldsValue
        this.props.filterSubmit(fieldsValue);
    }
    //重置查询
    reset = () => {
        this.myForm.resetFields();
    }


    initFormList = () => {
        const formItemList = []
        const formList = this.props.formList;
        if (formList && formList.length > 0) {
            formList.forEach((item, i) => {
                let { label, field, placeholder, initialValue, width, list } = item;
                //时间查询
                if (item.type === "城市") {

                    const city = <Form.Item label="城市" name="city" colon={false} >
                        <Select initialValue={'0'} placeholder={placeholder} style={{ width: 100 }}>
                            {Utils.getOptionList([{ id: "0", name: "全部" }, { id: "1", name: "北京市" }, { id: "2", name: "哈尔滨市" }, { id: "3", name: "绥化市" }])}
                        </Select>
                    </Form.Item>
                    formItemList.push(city);
                }

                //INPUT
                if (item.type === "INPUT") {
                    const INPUT = <Form.Item label={label} key={field} >
                        <Input type="text" placeholder={placeholder} style={{ width: width }} />
                    </Form.Item>
                    formItemList.push(INPUT)
                }
                else if (item.type === "时间查询") {
                    const begin_time = <Form.Item label="订单时间" name="start_time" >
                        <DatePicker format='YYYY-MM-DD HH:mm:ss' placeholder='选择开始时间' style={{ width: width }} />
                    </Form.Item>
                    formItemList.push(begin_time);
                    const end_time = <Form.Item label="~" name="end_time" colon={false} >
                        <DatePicker format='YYYY-MM-DD HH:mm:ss' placeholder='选择结束时间' style={{ width: width }} />
                    </Form.Item>
                    formItemList.push(end_time);
                }
                //SELECT
                else if (item.type === "SELECT") {
                    const SELECT = <Form.Item label={label} key={field} >
                        <Select placeholder={placeholder} style={{ width: width }}>
                            {Utils.getOptionList(list)}
                        </Select>
                    </Form.Item>
                    formItemList.push(SELECT)
                }

                //CHECKBOX
                else if (item.type === "CHECKBOX") {
                    const CHECKBOX = <Form.Item placeholder={placeholder} name={field} initialValue={initialValue} label={label} key={field} valuePropName="checked">
                        <Checkbox >
                            {label}
                        </Checkbox>
                    </Form.Item>
                    formItemList.push(CHECKBOX)
                }
                else if (item.type === "DATE") {
                    const DATE = <Form.Item label={label} key={field}>
                        <DatePicker format='YYYY-MM-DD HH:mm:ss' placeholder='选择结束时间' style={{ width: width }} />
                    </Form.Item>
                    formItemList.push(DATE)
                }
            })
        } return formItemList;
    }
    render() {
        return (
            <Form layout='inline' ref={c => this.myForm = c}>
                {this.initFormList()}
                <Form.Item>
                    <Button type="primary" style={{ margin: '0 20px' }} onClick={this.handleFilterSubmit}>查询</Button>
                    <Button onClick={this.reset}>重置</Button>
                </Form.Item>
            </Form>
        )
    }
}
export default FilterForm;