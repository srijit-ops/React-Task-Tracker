import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Alltask from './components/Alltask';
import './App.css';
import { ToastContainer } from 'react-toastify'

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  function filterHandler() {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => {
          return todo.completed === true
        }))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => {
          return todo.completed === false
        }))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  useEffect(()=>{
    const localTodos= localStorage.getItem("todos")
    console.log(localTodos)
    if(localTodos){
      setTodos(JSON.parse(localTodos))
      console.log("gg")
    }
  },[])
  useEffect(() => {
    filterHandler()
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos, status])
  useEffect(() => {
    filterHandler()
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
      <div className="container">
        <Form setInputText={setInputText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} />
        <Alltask inputText={inputText} todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
    <ToastContainer autoClose={1500}/>
    </>
  );
}

export default App;
