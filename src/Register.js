import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom'
import Main from "./Main";
import ReactDOM from "react-dom";
import "./css/bootstrap.css";
import "./css/style.css";
import Info from "./Info.js";
import { INFORMATION } from "./Settings.js";
import $ from "jquery";

class Welcome extends Component
{
    /************************************************************************ 
     * Screen design that involves a simple form where users can insert an 
     * identifier. This identifier is used to store the data.
     * 
     * References:
     * For further information on forms in React check:
     * https://reactjs.org/docs/forms.html
    *************************************************************************/
    collection = null
    constructor(props)
    {
        super(props);
        this.state = { id: "", consent: false, password: "" };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /************************************************************************
     * Handles the checkbox change when the element is clicked. 
     * @param {event} event: A click event.
    *************************************************************************/
    handleChange = (event) =>
    {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    /************************************************************************ 
     * Renders informed consent page.
    *************************************************************************/
    renderIFC = () =>
    {
        ReactDOM.render(<Info textDescription={INFORMATION} />,
            document.getElementById("root"))
    }

    login = (username, password, data) =>
    {
        //   sessionStorage.setItem("nodeData", JSON.stringify({ nodes: this.state.nodes, links: this.state.links, foci: this.state.foci }));
        $.ajax({
            url: "/",
            method: "Post",
            data: { "ID": username, "password": password, "data": data },
        })
    }
    /************************************************************************ 
    * The username submit function.
    * Once clicked, the submit function checks if the session already exists, 
    * and if it does, it returns it from session storage. Otherwise a new 
    * session is created and added to starage.
    *************************************************************************/
    handleSubmit = () =>
    {

        // console.log("handling submit.", event)
        // event.preventDefault();
        if (this.state.consent)
        {
            console.log("Session Data: ", sessionStorage.getItem("nodeData"))
            if (sessionStorage.getItem("nodeData"))
            {
                console.log("existing session")
                let data = JSON.parse(sessionStorage.getItem("nodeData"));
                console.log(data)
                this.login(this.state.id, this.state.password, data)
                ReactDOM.render(<Main ID={this.state.id} nodes={data.nodes} links={data.links} foci={data.foci} />,
                    document.getElementById("root"))
            } else
            {
                console.log("New Session")
                this.login(this.state.id, this.state.password, null)
                ReactDOM.render(<Main ID={this.state.id} nodes={[]} links={[]} foci={[]} />,
                    document.getElementById("root"))
            }
        } else
        {
            alert("Please provide consent.")
        }

    }

    render()
    {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="loginForm">
                    <h1>Register</h1>
                    <input
                        className="loginInput"
                        type="text"
                        name="id"
                        placeholder="Enter Email"
                        value={this.state.id}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        className="loginInput"
                        type="password"
                        name="password"
                        secureTextEntry={true}
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        className="loginInput"
                        type="password"
                        name="password"
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <label style={{ textAlign: "left" }}>
                        I consent to my data being stored and confirm that I have read the <a style={{ color: "blue", textDecoration: "underline" }} href="/consent">informed consent sheet</a>.
                        <input
                            name="consent"
                            type="checkbox"
                            checked={this.state.consent}
                            onChange={this.handleChange} />
                    </label>
                    <input className="loginInput" type="submit" value="Submit" onClick={() => this.handleSubmit} />
                    <p>Already a participant? Please <Link to="/">login</Link>.</p>
                </form>
            </div>
        );
    }

}
export default Welcome;