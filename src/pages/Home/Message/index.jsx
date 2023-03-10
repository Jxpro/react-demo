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
                                    {/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp; */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>&nbsp;&nbsp; */}

                                    {/* 向路由组件传递state参数 */}
                                    {/* replace模式会将history.push改为history.replace */}
                                    <Link replace to={{ pathname: '/home/message/detail', state: { id: message.id, title: message.title } }}>{message.title}</Link>&nbsp;&nbsp;
                                </li>
                            );
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* search参数无需声明接受，正常注册即可 */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}


                {/* state参数无需声明接受，正常注册即可 */}
                <Route path="/home/message/detail" component={Detail} />
            </div>
        );
    }
}
