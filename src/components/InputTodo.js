import { Component } from "react";


class InputTodo extends Component {
     
    onchange = e => {
            this.setState({
                [e.target.name]: e.target.value,
            }); 
        };
        handleSubmit = e =>{
            e.preventDefault();
            if (this.state.title.trim()) {
            this.props.addTodoProps(this.estates.title)
           this.setState({
            title: ""
        })
        }else{
            alert("Please write item")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                 type="text" 
                 placeholder="Add Todo..."
                 value={this.state.title}
                 name="title"
                 onChange={this.onChange} 
                 />
                <button>Submit</button> 
            </form>
        )
    
    }
}
export default InputTodo