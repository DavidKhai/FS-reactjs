import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../Home';
import Login from '../Login';
import SignUp from '../SignUp';

class RedirectURL extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/admin-@1256hrkhf" component={Home}/>
            </Switch>
        );
    }
}

export default RedirectURL;