import React, { Component } from 'react';
import qs from 'qs';

const detailData = [
    { id: '1', content: 'message001' },
    { id: '2', content: 'message002' },
    { id: '3', content: 'message003' },
];

export default class Detail extends Component {
    render() {
        // 接收params参数
        const { id, title } = this.props.match.params;
        const findResult = detailData.find(detail => detail.id === id);
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {findResult.content}</li>
            </ul>
        );
    }
}
