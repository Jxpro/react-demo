import React, { Component } from 'react';
import DemoNavLink from '../DemoNavLink';
export default class List extends Component {
    render() {
        return (
            <div className="list-group">

                {/* 最普通的路由链接 */}
                {/* <Link className="list-group-item " to="/about">About</Link> */}
                {/* <Link className="list-group-item" to="/home">Home</Link> */}

                {/* Link的升级版，会给当前的Link加上activeClassName所指定的class，不写则默认为active */}
                {/* <NavLink activeClassName='active' className="list-group-item" to="/about">About</NavLink> */}
                {/* <NavLink activeClassName='active' className="list-group-item" to="/home">Home</NavLink> */}

                {/* 自己封装的NavLink，封装了activeClassName等参数，减少代码冗余 */}
                <DemoNavLink className="list-group-item" to="/about">About</DemoNavLink>
                <DemoNavLink className="list-group-item" to="/home">Home</DemoNavLink>

            </div>
        );
    }
}
