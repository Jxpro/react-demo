import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DemoNavLink extends Component {
    render() {
        return (
            <div>
                {/* 可自己指定activeClassName进行封装,this.props.children是指DemoNavLink标签中的内容 */}
                {/* <NavLink activeClassName='active' className="list-group-item" to={this.props.to}>this.props.children</NavLink> */}

                {/* 也可以使用自闭合标签，将to和children等直接往下传给NavLink，效果同上 */}
                <NavLink activeClassName='active' className="list-group-item" {...this.props} />
            </div>
        );
    }
}
