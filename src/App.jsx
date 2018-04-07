import React, { Component } from 'react'
import Stats from './components/Stats'
import Todos from './components/Todos'
import Home from './components/Home'
import { Route, Switch, Link } from 'react-router-dom'

class App extends Component {
    render() {
        return(
            <section>
                <section>
                    <Link to='/'>Home</Link>
                    <Link to='/stats'>Stats</Link>
                    <Link to='/list'>List</Link>
                </section>
                <section>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/stats' component={Stats} />
                        <Route path='/list' component={Todos} />                    
                    </Switch>
                </section>
            </section>
        )
    }
}

export default App