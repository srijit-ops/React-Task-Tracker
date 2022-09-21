import React from 'react'
import Todo from "./Todo"
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';    
function Alltask(props) {
  console.log(props.filteredTodos)
  
  return (
    <div className='todo_Container pt-5'>
      <div className='head_holder d-flex justify-content-between align-items-center mb-4'>
        <h4>Task</h4>
        <h4>Due time</h4>
        <h4>Due date</h4>
        <h4>Done?</h4>
        <h4>Delete</h4>
        
      </div>

      
      <ol className='todoList'>
        {
          props.filteredTodos.map((todo)=>{
            return <Todo taskname={todo.text} taskDate={todo.date} taskTime={todo.time} key={todo.id} setTodos={props.setTodos} todos={props.todos} todo={todo} meridian={props.meridian} setMeridian={props.setMeridian}/>
          })
        }
        
      </ol>

    </div>
  )
}

export default Alltask