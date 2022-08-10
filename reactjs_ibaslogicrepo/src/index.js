import { BrowserRouter as Router} from "react-router-dom"
import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./FunctionBased/components/TodoContainer"

//stylesheet
import "./FunctionBased/App.css"

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <TodoContainer />
      </Router>
    </React.StrictMode>,
     document.getElementById("root"))
   