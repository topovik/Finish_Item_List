import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { load } from '../actions'

class TodoList extends Component {

    componentDidMount() {
        this.props.loadTodos()
    }

    render() {
        const list = this.props.todos
        .filter(todo => todo.text.includes(this.props.superFilter))
        .map(todo => {
            return <Todo todo={todo} key={todo.id}/>
        })

        return(
            <section>
                { list }
            </section>            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        superFilter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadTodos: () => dispatch(load())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)