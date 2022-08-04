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
                completed: false
            },
            {                
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
    render(
        
    ) {
        return (
            <div>
                <Header />
                <TodosList todos={this.state.todos} />
                </div>
        );
    }
}
export default TodoContainer