import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from '../home/home';
import Dashboard from '../dashboard/dashboard';
import Preferences from '../preferences/preferences';

class App extends Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">App Title</h1>
                </header>
                <div className="menu">
                    <ul>
                        <li>
                            {' '}
                            <Link to="/">Home</Link>{' '}
                        </li>
                        <li>
                            {' '}
                            <Link to="/dashboard">Dashboard</Link>{' '}
                        </li>
                        <li>
                            {' '}
                            <Link to="/preferences">Preferences</Link>{' '}
                        </li>
                    </ul>
                </div>
                <div className="App-intro">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/preferences" component={Preferences} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;