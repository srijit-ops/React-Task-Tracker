import React from 'react'
import "./style.css"
import { toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';    
function Todo(props) {
  
  /*let timeSplit, hours, minutes, meridian, targetP
  const timer= document.getElementById("taskTime")
    if(timer!== null){
      timeSplit = timer.value.split(':'),
    
  hours = timeSplit[0];
  minutes = timeSplit[1];
  if (hours > 12) {
    meridian = 'PM';
    hours -= 12;
  } else if (hours < 12) {
    meridian = 'AM';
    if (hours == 0) {
      hours = 12;
    }
  } else {
    meridian = 'PM';
  }
  console.log(meridian)
    }*/
    /*else{
      let test=document.getElementsByClassName("due_time")
      let test2=(test[0].innerHTML)
      timeSplit = test2.split(':'),
    
  hours = timeSplit[0];
  minutes = timeSplit[1];
  if (hours > 12) {
    meridian = 'PM';
    hours -= 12;
  } else if (hours < 12) {
    meridian = 'AM';
    if (hours == 0) {
      hours = 12;
    }
  } else {
    meridian = 'PM';
  }
    }*/
    
  function doneFunc(e){
    toast.success('Task marked completed successfully')
    props.setTodos(props.todos.map((item)=>{
      if(item.id!==props.todo.id){
        return {...item}
      }else{
        return {...item,completed:true} 
      }
    }))
    const doneDiv= e.target.parentElement.parentElement
    console.log(doneDiv)
    e.target.parentElement.disabled=true
    //doneDiv.style.opacity=0.6
    doneDiv.classList.add("taskDone")
    /*targetP=e.target.parentNode.getElementsByClassName('taskTime')[0].innerHTML*/
  }
  /*console.log(targetP)*/
  function delFunc(){
    toast.success('Task deleted successfully')
    props.setTodos(props.todos.filter((elem)=>{ //here we need the new array which will not have the obj we've deleted
      return elem.id!== props.todo.id //so only return those objects in the array form which id doesn't match with the id of todo. caz todo is refering to the current obj in the arr of which we've clicked the del button
    }))
    
  }
  
  /*props.todos.forEach((i)=>{
    if(i.completed===true){
      const doneDiv2= e.target.parentElement.parentElement
    e.target.parentElement.disabled=true
    doneDiv2.style.opacity=0.6
    }
  })*/
  return (
    <div className='d-flex justify-content-between align-items-center px-3 py-2 mb-3 list_divs' style={{background: "gold",
      borderRadius: "5px"}}>
        <li className='todo-li' style={{listStyle: "none",
    fontSize: "1.2rem"}}>{props.taskname}</li>
        <p className='due_time' style={{fontSize: "1.2rem"}}>{props.taskTime + ":" + props.meridian}</p>
        <p className='due_date' style={{fontSize: "1.2rem"}}>{props.taskDate}</p>
        <button className='complete_btn' onClick={doneFunc} style={{color: "green",
    background: "transparent",
    borderColor: "transparent"}}><i className='bx bx-check fw-bold' style={{fontSize: "1.9rem"}}></i></button>
        <button className='del_btn' onClick={delFunc} style={{color: "red",
    background: "transparent",
    borderColor: "transparent"}}><i className='bx bx-trash fw-bold' style={{fontSize: "1.5rem"}}></i></button>
    </div>
  )
}

export default Todo