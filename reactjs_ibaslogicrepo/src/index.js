import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./FunctionBased/components/TodoContainer"

//stylesheet
import "./FunctionBased/App.css"

ReactDOM.render(
    <React.StrictMode>
      <TodoContainer />
    </React.StrictMode>,
     document.getElementById("root"))
   