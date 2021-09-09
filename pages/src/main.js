import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import './style/main.less';

const Main = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        </>
    );
};
export default Main;
