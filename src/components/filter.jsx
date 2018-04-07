import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { filterTodo } from '../actions'

class Filter extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
    }
    

    render() {
        return (
            <section>
                <span>Filter:</span>
                <input value={this.props.stateFilter} onChange={this.onChange} type="text"/>
            </section>
        )    
    }

    onChange(e) {
        this.props.filterTodo(e.target.value)
    }        
}

const mapStateToProps = (state) => {
    return {
        stateFilter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterTodo: (text) => dispatch(filterTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)