import React, { Component } from 'react';
import './index.css';

export default class Header extends Component {
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        );
    }

    handleKeyUp = event => {
        const { key, target } = event;
        if (key !== 'Enter') return;
        if (target.value.trim() === '') {
            alert('输入不能为空');
            return;
        }
        const todoObj = { id: Date.now(), name: target.value, done: false };
        this.props.addTodo(todoObj);
        target.value = '';
    };
}
