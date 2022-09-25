import React from 'react'
import Todo from "./Todo" 
import "./style.css"     
function Alltask(props) {
  return (
    <div className='todo_Container pt-5'>
      <div className='head_holder d-flex justify-content-between align-items-center mb-4'>
        <h4>Task</h4>
        <h4>Due time</h4>
        <h4>Due date</h4>
        <h4>Done?</h4>
        <h4>Delete</h4>
      </div>
      <ol className='todoList px-0'>
        {
          props.filteredTodos.map((todo)=>{
            return <Todo taskname={todo.text} taskDate={todo.date} taskTime={todo.time} key={todo.id} setTodos={props.setTodos} todos={props.todos} todo={todo} meridian={todo.meridian} />
          })
        }
      </ol>
    </div>
  )
}

export default Alltask