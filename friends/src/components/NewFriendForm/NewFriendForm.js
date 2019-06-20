import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postFriend } from "../../actions";

import { BackgroundCover, NewFriendContainer, Form, Input, Button} from "./FormStyles";

class NewFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name:   "",
            age:    "",
            email:  ""
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    } 

    submit = e => {
        e.preventDefault();
        if (this.state.name === "" || this.state.age === "" || this.state.email === "") {return}

        // Create a new friend obj with updated info
        const friend = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email
        }

        // Reset the form
        this.setState({
            name:   "",
            age:    "",
            email:  ""
        })

        // Submit our changes to FriendList.js
        this.props.postFriend(friend);
    }

    render() {
        return (
            <>
            <BackgroundCover />
                <NewFriendContainer>
                    <Form onSubmit={this.submit}>
                        <h2>Add Friend to Database</h2>
                        <Input
                            type=          "text"
                            name=          "name"
                            value=         {this.state.name}
                            placeholder=   "New Friend's name"
                            onChange=      {this.handleChanges}
                        />
                        <Input
                            type=          "number"
                            name=          "age"
                            value=         {this.state.age}
                            min=           "0" 
                            max=           "120"
                            placeholder=   "New Friend's age"
                            onChange=      {this.handleChanges}
                        />
                        <Input
                            type=          "email"
                            name=          "email"
                            value=         {this.state.email}
                            placeholder=   "New Friend's email"
                            onChange=      {this.handleChanges}
                        />
                        <Button type="submit">Add</Button>
                        <Button as={Link} to="/friends">Exit</Button>
                    </Form>
                </NewFriendContainer>
            </>
        );
    }
}

const mstp = state => {
    return {};
}

export default connect(mstp, { postFriend })(NewFriendForm);