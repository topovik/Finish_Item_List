import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Filter from './filter'

class Todos extends Component {
    render() {
        return(
            <section>
                <AddTodo />
                <Filter />
                <TodoList/>
            </section>
        )
    }
}

export default Todos