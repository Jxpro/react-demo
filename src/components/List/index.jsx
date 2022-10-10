import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component {
    render() {
        return (
            <div className="list-group">
                <Link className="list-group-item " to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
            </div>
        );
    }
}
