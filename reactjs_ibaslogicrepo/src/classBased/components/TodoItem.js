import React from "react";
import styles from "./TodoItem.module.scss"

class TodoItem extends React.Component  {
state = {
  editing: false,
};

handleEditing = () => {
  this.deState({
    editing: false,
  })
  console.log("edit mode activated")
    
};
handleUpdatedDone = event => {
  if (event.key==="Enter"){
   this.setState({ editing: false })
  }
  console.log(event.key)


}
    render() {
      const { completed, id, title } = this.props.todo

        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
          viewMode.display = "none"
        }else{
          editMode.display = "none"
        }
      }
        
        return () {
          <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                <input type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => this.props.handleChangeprops(id)}/>
                     <button onClick={() => this.props.deleteTodoprops(id)}>Delete</button>
                     <span style={completed ? completedStyle : null}>
                    {title}
                </span>
               </div>
                <input
                    type="text"
                    styles={editMode}
                    className={styles.textInput}
                    value={title}
                    onChange={e => {
                    this.props.setUpdate(e.target.value, id)
          }
        }
                onKeyDown={this.handleUpdatedDone}
        />
      </li>
      
    }
  };
      
      
export default TodoItem
