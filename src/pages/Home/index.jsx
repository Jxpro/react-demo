import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DemoNavLink from '../../components/DemoNavLink';
import News from './News';
import Message from './Message';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <DemoNavLink className="list-group-item" to="/home/news">News</DemoNavLink>
                        </li>
                        <li>
                            <DemoNavLink className="list-group-item" to="/home/message">Message</DemoNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        );
    }
}
