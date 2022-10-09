import React, { Component } from 'react';
import Item from '../Item';
import './index.css';

export default class List extends Component {
    render() {
        return (
            <ul className="todo-main">
                {
                    this.props.todos.map(todo => {
                        return <Item key={todo.id} {...todo}
                            updateTodo={this.props.updateTodo}
                            deleteTodo={this.props.deleteTodo} />;
                    })
                }
            </ul>
        );
    }
}
