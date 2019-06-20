import React from "react";
import Loader from "react-loader";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    login = e => {
        e.preventDefault();
        this.props.login({username: this.state.username, password: this.state.password});
        // this.setState({username: "", password: ""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type=       "text"
                        name=       "username"
                        value=      {this.state.username}
                        onChange=   {this.handleChanges}
                    />
                    <input 
                        type=       "password"
                        name=       "password"
                        value=      {this.state.password}
                        onChange=   {this.handleChanges}
                    />
                    <button>
                        {this.props.loggingIn ? 
                        <Loader />
                        : "Log In" }
                    </button>
                </form>
            </div>
        );
    }
}

const mstp = state => {
    return {
        error: state.error,
        loggingIn: state.error
    }
}

export default connect(mstp, { login })(Login);