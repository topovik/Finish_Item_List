import React, { Component } from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

class AddTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

    this.onChange = this.onChange.bind(this)
    
    }

    render() {
        return(
            <section>
                <input value={this.state.text} onChange={this.onChange} type="text"/>
                <button onClick={() => this.props.addTodo(this.state.text)}>Add</button>
            </section>
        )
    }

    onChange(e) {
        this.setState({text: e.target.value})
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(addTodo(text))
    }
}

export default connect(undefined, mapDispatchToProps)(AddTodo)