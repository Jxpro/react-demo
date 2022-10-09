import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends Component {
    state = {
        todos: [
            { id: 1, name: '吃饭', done: true },
            { id: 2, name: '睡觉', done: true },
            { id: 3, name: '打代码', done: false },
        ],
    };
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                </div>
            </div>
        );
    }

    addTodo = todoObj => {
        this.setState({ todos: [todoObj, ...this.state.todos] });
    };

    updateTodo = (id, done) => {
        const newTodos = this.state.todos.map(todo => {
            if (id.includes(todo.id)) return { ...todo, done };
            else return todo;
        });
        this.setState({ todos: newTodos });
    };

    deleteTodo = id => {
        this.setState({ todos: this.state.todos.filter(todo => !id.includes(todo.id)) });
    };
}
