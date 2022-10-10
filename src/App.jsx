import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import List from './components/List';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                        {/* 一般可置于任意位置且顺序执行，结果以最后一次重定向为准 */}
                        {/* <Redirect to="/home" /> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <List />
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 通常情况下，path和component是一一对应的关系 */}
                                {/* 但存在一个path对应多个component时，也会展示多个component */}
                                {/* 所以React在进行路由匹配时，是按照路由的顺序匹配到底的 */}
                                {/* 使用Switch进行包裹，可以提高路由匹配效率（单一匹配） */}
                                <Switch>
                                    {/* exact[={ true }] 可开启路由严格匹配，一般不开，默认为模糊匹配*/}
                                    {/* <Route exact path="/about" component={About} /> */}
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    {/* Redirect一般用于在所有路由均不匹配时，重定向到一个默认路由 */}
                                    {/* 效果同Link，但不会渲染为dom标签，当没有路由匹配时自动执行 */}
                                    {/* 一般可置于任意位置且顺序执行，结果以最后一次重定向为准 */}
                                    {/* 由于Switch单一匹配的原则，所以Redirect与Switch搭配使用时 */}
                                    {/* 一般置于最后一条路由，且其指定的路由应该是已经出现过的路由 */}
                                    <Redirect to="/about" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
