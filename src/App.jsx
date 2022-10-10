import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <List />
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 通常情况下，path和component是一一对应的关系， */}
                                {/* 但存在一个path对应多个component时，也会展示多个component， */}
                                {/* 所以React在进行路由匹配时，是按照路由的顺序匹配到底的， */}
                                {/* 使用Switch进行包裹，可以提高路由匹配效率（单一匹配） */}
                                <Switch>
                                    {/* exact[={ true }] 可开启路由严格匹配，一般不开，默认为模糊匹配*/}
                                    {/* <Route exact path="/about" component={About} /> */}
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
