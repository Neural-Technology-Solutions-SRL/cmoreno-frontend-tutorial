import Header from "./Header";
import React from "react"
import TodosList from "./TodoList";
class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup developement enviroment",
                completed: true
            },
            {
                id: 2,
                title: "develope website and add content",
                completed: true
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    }

    handleChange = (id) => {
        this.setState(prevState => {
            return {
              todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  }
                }
                return todo
              }),
            }
          })
        }
    render() {
        return (
            <div>
                <Header />
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
            </div>
        );
        }     
    
}
export default TodoContainer