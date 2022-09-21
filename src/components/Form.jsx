
import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modalform from './Modalform';

function Form(props) {
  const [show, setShow] = useState(false);
  let [currItem, itemUpdater] = useState([]) //currItem undefined asche
  let timeSplit, hours, minutes
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //var timeSplit, hours, minutes, meridian
  function addIt() {
    let textValue = document.getElementById("taskDef").value
      let dateValue = document.getElementById("taskDate").value
      let timeValue = document.getElementById("taskTime").value
    if(textValue && dateValue && timeValue){
      toast.success('Task added successfully')
      props.setInputText(textValue)
      props.setTodos([...props.todos, { text: textValue, date: dateValue, time: timeValue,  completed: false, id: Math.random() * 1000 }])
      setShow(false)
      
  const timer= document.getElementById("taskTime")
    
      timeSplit = timer.value.split(':'),
    
  hours = timeSplit[0];
  minutes = timeSplit[1];
  if (hours > 12) {
    props.setMeridian('PM')
    //newMeridian = 'PM';
    hours -= 12;
  } else if (hours < 12) {
    props.setMeridian('AM')
    //newMeridian = 'AM';
    if (hours == 0) {
      hours = 12;
    }
  } else {
    props.setMeridian('PM')
    //newMeridian = 'PM';
  }
  console.log(props.meridian)
    

      /*const timer= document.getElementById("taskTime")
      console.log(timer)
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
    props.parentCallback(meridian)*/
    } else{
      alert("please enter data in every field")
    }
  }
  
  function statusHandler(e) {

    props.setStatus(e.target.value)

  }
  
  return (
    <div className='mb-5'>
      <h2 className='mt-4' style={{ textAlign: "center" }}>Task Hub</h2>
      <select onChange={statusHandler} style={{ float: "right" }}>
        <option value="all">All tasks</option>
        <option value="completed">Completed tasks</option>
        <option value="uncompleted">Uncompleted tasks</option>
      </select>
      <Button variant="primary" onClick={handleShow} className="btn btn-info py-1 px-2 fw-bold" style={{ color: "white", fontSize: "1.1rem", float:"left" }}>
        <i className='bx bx-plus'></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modalform labelText="Enter the task" dataType="text" holder="task name" addId="taskDef"></Modalform>
          <Modalform labelText="Enter the date" dataType="date" holder="date" addId="taskDate"></Modalform>
          <Modalform labelText="Enter the time" dataType="time" holder="time" addId="taskTime"></Modalform>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addIt}>
            Save task
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Form