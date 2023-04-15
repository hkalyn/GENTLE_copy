import React, { Component } from "react";
import Main from "./Main";
import ReactDOM from "react-dom";
import "./css/bootstrap.css";
import "./css/style.css";
import Info from "./Info.js";
import Login from "./Login"
import Register from "./Register"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { INFORMATION } from "./Settings.js";
import $ from "jquery";

class Welcome extends Component
{
    render()
    {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <Login />
                    )} />
                    <Route exact path="/register" render={(props) => (
                        <Register />
                    )} />
                    <Route exact path="/consent" render={(props) => (
                        <Info />
                    )} />
                </Switch>
            </Router>
        );
    }

}
export default Welcome;