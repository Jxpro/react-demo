import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
    render() {
        let allCount = this.props.todos.length;
        let doneCount = this.props.todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0);
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"
                        checked={allCount === doneCount && allCount !== 0}
                        onChange={() => this.props.updateTodo(this.props.todos.map(todo => todo.id), !(allCount === doneCount))} />
                </label>
                <span>
                    <span>已完成 {doneCount}</span> / 全部 {allCount}
                </span>
                <button className="btn btn-danger"
                    onClick={() => this.props.deleteTodo(this.props.todos.filter(todo => todo.done).map(todo => todo.id))}>清除已完成任务</button>
            </div>
        );
    }
}
