import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar } from './components'
import { AllPinsView, PinView, NotFoundView } from './views'

const App = () => {
    return (
        <Router>
            <h1>Pin-A-Like</h1>
            <Navbar />
            <Switch>
                <Route path='/' component={AllPinsView} />
                {/* <Route exact path='/cats' render={() => <AllPinsView search='cats' />}/>
                <Route exact path='/pins/:pinId' component={PinView} />
                <Route component={NotFoundView} /> */}
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))