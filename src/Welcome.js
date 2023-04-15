import React, { Component } from "react";
import Survey from "./Survey";
import ReactDOM from "react-dom";
import "./css/bootstrap.css";
import "./css/style.css";
import Info from "./Info.js";
import Login from "./Login"
import Register from "./Register"
import ProtectedRoute from "./ProtectedRoute"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { INFORMATION } from "./Settings.js";
import $ from "jquery";

class Welcome extends Component
{
    collection = null
    constructor(props)
    {
        super(props);
        this.state = { id: "", consent: false, password: "", auth: false, nodes: [], links: [], foci: [] };
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    login = (username, password, data) =>
    {
        //   sessionStorage.setItem("nodeData", JSON.stringify({ nodes: this.state.nodes, links: this.state.links, foci: this.state.foci }));
        $.ajax({
            url: "/login",
            method: "Post",
            data: { "ID": username, "password": password, "data": data },
            res: { status: null },
            success: this.loginSuccess,
            error: this.loginFailure
        })

        // this.resolveLoginAttempt()
    }

    loginSuccess = (res) =>
    {
        console.log("Login Successful", res)
        this.setState({ auth: true })

        // TODO: Parse res.data here if there is any, set it into sessionStorage otherwise, set sessionstorage to empty.
        // sessionStorage.setItem("nodeData", JSON.stringify({ nodes: this.state.nodes, links: this.state.links, foci: this.state.foci, auth: this. }));
    }

    loginFailure = (res) =>
    {
        var failureMessage = res.responseJSON.status
        console.log("Login Failure", failureMessage)
        if (failureMessage === 'password mismatch')
        {
            alert("The password you entered is incorrect. Please enter the correct password.")
        }
        else if (failureMessage === "User Not Found")
        {
            alert("The account you are trying to access does not exist. Please check the email address you entered and try again, or register below.")
        }
    }

    /************************************************************************ 
    * The username submit function.
    * Once clicked, the submit function checks if the session already exists, 
    * and if it does, it returns it from session storage. Otherwise a new 
    * session is created and added to storage.
    *************************************************************************/
    handleLoginCallback = (username, password, consent) =>
    {
        console.log("Handling Login Callback")
        console.log("Username: ", username)
        console.log("Password: ", password)
        console.log("Consent: ", consent)
        if (consent)
        {
            this.login(username, password, consent)
        }
        // this.loginSuccess()
    }

    conditionalRender = () =>
    {
        // TODO: If there is any session storage, it should be read as a priority. Users may be mid session.
        // Otherwise, pull From DB if you can
        //Else, set nodes as empty
        if (this.state.auth === false)
        {
            return <Login
                handleLoginCallback={this.handleLoginCallback}
            />
        }
        else
        {
            return <Redirect to={"/survey"} replace />
        }
    }
    render()
    {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        // <Login
                        //     handleLoginCallback={this.handleLoginCallback}
                        // />
                        this.conditionalRender()
                    )} />
                    <Route exact path="/register" render={(props) => (
                        <Register />
                    )} />
                    <Route exact path="/consent" render={(props) => (
                        <Info />
                    )} />
                    {/* <ProtectedRoute auth={this.state.auth} redirectPath={"/"}> */}
                    <Route exact path="/survey" render={(props) => (
                        <ProtectedRoute auth={this.state.auth} redirectPath={"/"}>
                            <Survey ID={this.state.id} nodes={this.state.nodes} links={this.state.links} foci={this.state.foci} />
                        </ProtectedRoute>
                    )}>
                    </Route>
                    {/* </ProtectedRoute> */}
                </Switch>
            </Router>
        );
    }

}
export default Welcome;