import React, { useState,useEffect } from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App(){
  //state
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos,setfilteredTodos] = useState([]);

  //run once
  useEffect(()=>{
    getLocalTodos();
  },[]);

  //use effect
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos, status]);

  //functions & events
  const filterHandler =()=>{
    switch(status){
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setfilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  }

  //save to local
  const saveLocalTodos =()=>{
    
      localStorage.setItem('tosos',JSON.stringify(todos));
  
};

  const getLocalTodos =()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
    <header>
      <h1>My Todo List</h1>
    </header>
    <Form 
    inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
    setStatus={setStatus}
    />
    <TodoList 
    filteredTodos={filteredTodos}
    setTodos={setTodos}
    todos={todos}/> 
    </div>
  );
}

export default App;
