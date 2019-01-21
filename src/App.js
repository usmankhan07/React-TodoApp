import React, {Component} from 'react';
import Todos from './components/Todo';
import AddTodo from './components/AddTodo';

class App extends Component {
    state = {
        Todos: [
            {'id': 1, content: "put some water"},
            {'id': 2, content: "put some milk"}
        ]
    }

    handleDelTodo = (id) => {
        const Todos = this.state.Todos.filter(todo => {
            if(todo.id !== id) {
                return true;
            }
                return false;
        })
        this.setState({
            Todos
        })

    }

    handleAddTodo=(todo) => {
        todo.id = Math.random();
        const newTodos = [...this.state.Todos, todo];
        this.setState({
            Todos:newTodos
        });
    }



    render() {
        return(
            <div className = "TodoApp-content container">
                <center><h1 className = "blue-text">Todos</h1></center>
                <center><Todos Todos = {this.state.Todos } handleDelTodo = {this.handleDelTodo}/></center>
                <AddTodo handleAddTodo = {this.handleAddTodo}/>
            </div>
        );
    }



}

export default App;