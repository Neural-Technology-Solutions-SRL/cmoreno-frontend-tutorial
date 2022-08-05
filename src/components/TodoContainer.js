import Header from "./Header";
import React from "react";
import TodosList from "./TodoList";
import ImputTodo from "./InputTodo";
import { v4  as uuidv4 } from "uuid";



class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup developement enviroment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "develope website and add content",
                completed: true
            },
            {
                id: uuidv4(),
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
        delTodo = id => {
          this.setState({
            todos: [
              ...this.state.todos.filter(todo => {
                return todo.id !== id;
              })
            ]
          })
        };
        addTodoItem = title => {
          const newTodo = {
            id: 4,
            title: title,
            completed: false
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          });
        };
    render() {
        return (
            <div>
                <Header />
                <ImputTodo addTodoProps={this.addTodoItems} />
                <TodosList 
                todos={this.state.todos} 
                handleChangeProps={this.handleChange}
                deleteTodoProps={this.delTodo} 
                />
            </div>
        );
     };     
  
    }

export default TodoContainer