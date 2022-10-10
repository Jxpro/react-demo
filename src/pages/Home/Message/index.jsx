import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '1', title: 'message001' },
            { id: '2', title: 'message002' },
            { id: '3', title: 'message003' },
        ],
    };
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map(message => {
                            return (
                                <li key={message.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp;
                                </li>
                            );
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                <Route path="/home/message/detail/:id/:title" component={Detail} />
            </div>
        );
    }
}
