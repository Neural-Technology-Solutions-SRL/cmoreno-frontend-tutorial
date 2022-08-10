import { FaTrash } from "react-icons/fa"
import React, {useState, useEffect } from "react";
import styles from "./TodoItem.module.scss"

const TodoItem = props => { 
  const [editing, setEditing] = useState(false)


  const handleEditing = () =>{
    setEditing(true)
  } 

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(true)
    }
  }

      
  const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    
  const { completed, id, title } = this.props.todo

      let viewMode = {}
      let editMode = {}

        if (editing) {
          viewMode.display = "none"
           
        }else{
          
          editMode.display = "none"
        }      
        useEffect(() => {
          return () => {
            console.log("Cleaning up...")
          }
        }, [])
        
          return (
          <li className={styles.item}>
              <div onDoubleClick={handleEditing} style={viewMode}>
                <input type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => this.props.handleChangeprops(id)}
                    />
                     <button onClick={() => props.deleteTodoprops(id)}><FaTrash 
                     style={{color: "orangered", frontSize: "16px"}}/>
                     </button>
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
                        props.setUpdate(e.target.value, id)
                   }
                }
                onKeyDown={handleUpdatedDone}
            />
        </li>
        )
      }
    
    export default TodoItem
 