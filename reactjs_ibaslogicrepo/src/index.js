import { BrowserRouter as Router} from "react-router-dom"
import React from "react"
import ReactDOM from "react-dom"


import TodoContainer from "./FunctionBased/components/TodoContainer"


import "./FunctionBased/App.css"

ReactDOM.render(
    <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <TodoContainer />
      </Router>
    </React.StrictMode>,
     document.getElementById("root"))
   