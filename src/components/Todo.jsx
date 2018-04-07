import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeTodo, toogleTodo } from '../actions'

class Todo extends Component {
    render() {
        return(
            <section>
                {this.props.todo.text}
                <p onClick={() => this.props.toogleTodo(this.props.todo.id)}>
                    {this.props.todo.done ? 'Completed' : 'Uncompleted'}
                </p>
                <button onClick={() => this.props.removeTodo(this.props.todo.id)}>remove</button>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (id) => dispatch(removeTodo(id)),
        toogleTodo: (id) => dispatch(toogleTodo(id))
    }
}

export default connect(undefined, mapDispatchToProps)(Todo)