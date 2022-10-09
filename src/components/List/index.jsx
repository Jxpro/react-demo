import React, { Component } from 'react';
import './index.css';

export default class List extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.isFirst ? <h2>Welcome to use the search</h2> :
                        this.props.isLoading ? <h2>Loading...</h2> :
                            this.props.err ? <h2 style={{ color: 'red' }}>{this.props.err}</h2> :
                                this.props.users.map(userObj => {
                                    return (
                                        <div className="card" key={userObj.id}>
                                            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                                <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    );
                                })
                }
            </div>
        );
    }
}
