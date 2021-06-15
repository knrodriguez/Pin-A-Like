import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar } from './components'
import { AllPinsView, NotFoundView } from './views'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={AllPinsView} />
                <Route exact path='/cats' component={AllPinsView}/>
                <Route path='/login' component={NotFoundView} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))