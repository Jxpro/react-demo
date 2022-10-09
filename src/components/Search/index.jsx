import axios from 'axios';
import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text"
                        placeholder="enter the name you search"
                        ref={c => this.keyWordElement = c} />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }

    search = () => {
        this.props.UpdateAppState({ isFirst: false, isLoading: true });
        axios.get(`https://api.github.com/search/users?q=${this.keyWordElement.value}`).then(
            response => {
                this.props.UpdateAppState({ isLoading: false, users: response.data.items, err: '' });
            },
            err => {
                this.props.UpdateAppState({ isLoading: false, users: [], err: err.message });
            }
        );
    };
}
