import React, { useState, useEffect } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import { v4  as uuidv4 } from "uuid";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./Navbar";


const TodoContainer = () => {  
  const [todos, setTodos] = useState(getInitialTodos())

  const handleChange = (id) => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    )
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id;
      })
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  };
  useEffect(()=>{
    console.log("test run")
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
    if (loadedTodos){
        setTodos(loadedTodos)
       }
    },
  []);
  useEffect(()=>{
    console.log("test run") 
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    },
    [todos]
  );
    function getInitialTodos(){
          const temp = localStorage.getItem("todos")
          const savedTodos = JSON.parse(temp)
       return savedTodos || 
       []
    }

  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route exact="true" path="/" element = {
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodoList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate} 
              />
            </div>
          </div>
        }/>
        <Route path="about/*" element={ <About /> } />
        <Route path="*" element = { <NotMatch /> } />
      </Routes>
    </React.Fragment>
  )
}
export default TodoContainer;