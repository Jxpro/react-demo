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
        // const { id, title } = this.props.match.params;

        // 接收search参数
        // const { search } = this.props.location;
        // const { id, title } = qs.parse(search.slice(1));

        // 接收state参数
        // || {} 防止刷新页面时，state为undefined
        const { id, title } = this.props.location.state || {};
        const findResult = detailData.find(detail => detail.id === id) || {};
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {findResult.content}</li>
            </ul>
        );
    }
}
