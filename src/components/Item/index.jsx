import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    state = { mouse: false };

    render() {
        return (
            <li style={{ backgroundColor: this.state.mouse ? '#ddd' : 'white' }}
                onMouseEnter={() => this.setState({ mouse: true })}
                onMouseLeave={() => this.setState({ mouse: false })}>
                <label>
                    <input type="checkbox"
                        checked={this.props.done}
                        onChange={event => this.props.updateTodo([this.props.id], event.target.checked)} />
                    <span>{this.props.name}</span>
                </label>
                <button className="btn btn-danger"
                    style={{ display: this.state.mouse ? 'block' : 'none' }}
                    onClick={() => this.props.deleteTodo([this.props.id])}>删除</button>
            </li>
        );
    }
}
