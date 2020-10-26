import React from 'react'
//inport components
import Todo from "./Todo";

const TodoList = ({todos,setTodos,filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} 
                    todos={todos} 
                    todo={todo}
                    key={todo.id}
                    text={todo.text}/>     //key is needed to know what to remove or what to
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
