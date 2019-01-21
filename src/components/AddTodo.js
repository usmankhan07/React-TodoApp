import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        Todos:[
            {content:null}
        ]
    }

    handleChange = (e) => {
        this.setState({
            content:e.target.value
        });
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.props.handleAddTodo(this.state);

    }

    render() {
        return(
            <form>
                <label>Add New Todo:</label>
                <input onChange = {this.handleChange} />
                <center><button onClick = {this.handleSubmit}>Submit</button></center>
            </form>
        );
    }
}
export default AddTodo;