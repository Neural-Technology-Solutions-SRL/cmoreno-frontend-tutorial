import React from "react";

class TodoItem extends React.Component { 
    render() {

        return (
        
          <input type="checkbox" 
          checked={this.props.todo.completed} 
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          />
        )
    }

    }

export default TodoItem
