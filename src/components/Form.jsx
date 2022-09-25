import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modalform from './Modalform';

function Form(props) {
  const [show, setShow] = useState(false);
  function disablePastDate(){
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, "0")
    const mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
    const yy = today.getFullYear()
    return yy + "-" + mm + "-" + dd
}
  let timeSplit, hours, minutes, meridianValue
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function addIt() {
    let textValue = document.getElementById("taskDef").value
    let dateValue = document.getElementById("taskDate").value
    let timeValue = document.getElementById("taskTime").value
    if(textValue && dateValue && timeValue){
      toast.success('Task added successfully')
      timeSplit = timeValue.split(':'),
      hours = timeSplit[0];
      minutes = timeSplit[1];
       if (hours > 12) {
        meridianValue = 'PM';
        hours -= 12;
       } else if (hours < 12) {
        meridianValue = 'AM';
        if (hours == 0) {
          hours = 12;
      }
       } else {
          meridianValue = 'PM';
      }
      props.setInputText(textValue)
      props.setTodos([...props.todos, { text: textValue, date: dateValue, time: timeValue, meridian:meridianValue, completed: false, id: Math.random() * 1000 }])
      setShow(false)
    } else{
      alert("please enter data in every field")
    }
  }
  
  function statusHandler(e) {
    props.setStatus(e.target.value)
  }
  
  return (
    <div className='mb-5'>
      <h2 className='mt-1 mt-sm-4 mb-4 mb-sm-3 mb-md-0' style={{ textAlign: "center" }}>Task Tracker</h2>
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
          <Modalform labelText="Enter the date" dataType="date" holder="date" addId="taskDate"  mindate={disablePastDate()}></Modalform>
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