import { useState } from "react"

const TodoList = ({todos, removeTodo, doneTodo}) => {


    return todos.map( (todo, index) =>(
        <div className={todo.done ? 'Todo done' : 'Todo'} key={index}>
            <span>{todo.title}</span>
            <span> 
                <i className="fas fa-trash" onClick={()=>removeTodo(todo.id)}></i>
                <i className="fas fa-check" onClick={()=>doneTodo(todo.id) }></i>
            </span>
        </div>
    ));
}

export default TodoList
