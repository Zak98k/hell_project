import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import AuthPage from './pages/AuthPage';
import RegPage from './pages/RegPage';
import NotFound from './pages/NotFound';

class App extends Component {


    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to='/registration'> Registration</Link>
                    </li>
                    <li>
                        <Link to='/authentication'> Authentication</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/registration/" component={RegPage}/>
                    <Route path="/authentication/" component={AuthPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
