import React, { Component } from 'react'
import { Table } from 'antd'



export default class ETable extends Component {
    onRowClick = (record, index) => {
        let rowSelection = this.props.rowSelection;
        if (rowSelection === "checkbox") {
            let selectedItem = this.props.selectedItem
            let selectedRowKeys = this.props.selectedRowKeys
            let selectedIds = this.props.selectedIds
            if (selectedIds) {
                const i = selectedIds.indexOf(record.id);
                if (i === -1) {
                    selectedIds.push(record.id);
                    selectedRowKeys.push(index);
                    selectedItem.push(record)
                } else {
                    selectedIds.splice(i, 1);
                    selectedRowKeys.splice(i, 1);
                    selectedItem.splice(i, 1);
                }
            }
            else {
                selectedIds = [record.id];
                selectedRowKeys = [index];
                selectedItem = [record]
            }
            this.props.updateSelectedItem(selectedIds, selectedRowKeys, selectedItem)

        } else {
            let selectedRowKeys = [index];
            let selectedItem = record
            this.props.updateSelectedItem(selectedRowKeys, selectedItem)
        }
    }
    tableInit = () => {
        let row_Selection = this.props.rowSelection
        let selectedRowKeys = this.props.selectedRowKeys
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,

        }
        if (row_Selection === false || row_Selection === null) {
            row_Selection = false
        } else if (row_Selection = "checkbox") {
            row_Selection = "checkbox"
        } else {
            row_Selection = "radio"
        }
        return <Table
            bordered
            {...this.props}
            rowSelection={row_Selection ? rowSelection : null}
            onRow={
                (record, index) => {
                    return {
                        onClick: () => {
                            if (!row_Selection) {
                                return
                            }
                            this.onRowClick(record, index)
                        }
                    }
                }
            }
        />
    }
    render() {
        return (
            <div>
                {this.tableInit()}
            </div>
        )
    }
}