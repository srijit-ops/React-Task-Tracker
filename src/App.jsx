import React, { useState, useEffect } from 'react';
import Form from '../../todo/src/components/Form';
import Alltask from './components/Alltask';
import './App.css';
import { ToastContainer } from 'react-toastify'


function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  const [meridian, setMeridian]=useState('AM')
  let newMeridian
  function filterHandler() {
    switch (status) {
      case 'completed':
        console.log(todos.filter((todo)=>todo.completed===true))
        setFilteredTodos(todos.filter((todo) => {
          return todo.completed === true
        }))
        
        console.log(filteredTodos)
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => {
          return todo.completed === false
        }))
        console.log(filteredTodos)
        break
      default:
        console.log(todos)
        setFilteredTodos(todos)
        //console.log(filteredTodos)
        break
    }
  }
  /*function handleCallback(m){
    newMeridian=m
  }*/
  useEffect(() => {
    filterHandler()
    console.log(todos)
  }, [todos, status])
  useEffect(()=>console.log(filteredTodos),[filteredTodos])
  //useEffect(()=>console.log(todos),[todos])
  return (
    <>
      <div className="container">
        <Form setInputText={setInputText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} meridian={meridian} setMeridian={setMeridian}  />
        <Alltask inputText={inputText} todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} meridian={meridian} setMeridian={setMeridian} />
      </div>
    <ToastContainer/>
    </>
  );
}

export default App;
