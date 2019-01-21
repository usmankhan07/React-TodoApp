import React from 'react';

const Todos = ({Todos, handleDelTodo}) => {
const todoList = Todos.length ? (
    Todos.map(todo => (
    <div className = "collection-item" key = {todo.id}>
            <span onClick={() => {handleDelTodo(todo.id)}}>{todo.content}</span>
        </div>
    ))
):(
    <div classNane = "center">
        <p>you have'nt no todo left</p>
    </div>

)
return (
    <div className = "todos collection">
        {todoList}
    </div>

)
}


export default Todos;

