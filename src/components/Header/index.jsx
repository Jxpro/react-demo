import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={() => this.props.history.goBack()}>前进</button>&nbsp;
                <button onClick={() => this.props.history.goForward()}>后退</button>&nbsp;
                <button onClick={() => this.props.history.go(-2)}>退两步</button>
            </div>
        );
    }
}

// withRouter高阶组件，用于包装非路由组件，返回一个新的组
// 新的组件向非路由组件传递3个属性: history / location / match
// 从而让非路由组件可以操作路由组件的API，从而实现编程式导航，跳转到指定的路由路径
export default withRouter(Header);
