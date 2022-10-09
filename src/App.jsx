import React, { Component } from 'react';
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: '',
    };

    render() {
        return (
            <div className="container" >
                <Search UpdateAppState={this.UpdateAppState} />
                <List {...this.state} />
            </div >
        );
    }

    UpdateAppState = stateObj => {
        this.setState(stateObj);
    };
}
