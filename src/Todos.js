import React from 'react'

export default function Todos({todos,deleteTodo}) {

    const todolist = todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                  <span onClick={()=>{deleteTodo(todo.id)}}> {todo.content}</span> 
                    </div>
            )
        })
    ) : (
        <div className="center">
            <p>No todos left for the day yaaay!!</p>
            </div>
    )
    return (
        <div className="todos collection">
            {todolist}
        </div>
    )
}
