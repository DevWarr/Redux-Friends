import React from "react";
import Loader from "react-loader";
import { connect } from "react-redux";
import { login } from "../../actions";

import "./Login.scss";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount() {
        localStorage.removeItem("userToken");
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    login = e => {
        e.preventDefault();
        this.props.login({username: this.state.username, password: this.state.password})
            .then(res => {
                if (res) {this.props.history.push("/friends")};
            })
        // this.setState({username: "", password: ""})
    }

    render() {
        return (
            <div className="login">
                <h1>Log In</h1>

                <form onSubmit={this.login}>
                    <input 
                        type=          "text"
                        name=          "username"
                        placeholder=   "username"
                        value=         {this.state.username}
                        onChange=      {this.handleChanges}
                    />
                    <input 
                        type=          "password"
                        name=          "password"
                        placeholder=   "password"
                        value=         {this.state.password}
                        onChange=      {this.handleChanges}
                    />
                    <button>Log In</button>
                </form>
                {this.props.loggingIn ? <Loader color="#7bff00" /> : null}
                <h3>{this.props.error}</h3>
            </div>
        );
    }
}

const mstp = state => {
    return {
        error: state.error,
        loggingIn: state.loggingIn
    }
}

export default connect(mstp, { login })(Login);