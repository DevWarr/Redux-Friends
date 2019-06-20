import React from "react";
import { connect } from "react-redux";

import { FriendItem } from "../";
import { fetchData, putFriend, deleteFriend } from "../../actions";
import "./FriendList.scss";

class FriendList extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }


    render() {
        return (
            <div className="main-container">
                <h1>The Friend Database</h1>

                <div className="friend-container">
                    {this.props.friends.map(friendObj => {
                        return  <FriendItem
                                    friend=   {friendObj} 
                                    key=      {friendObj.id} 
                                    delete=   {this.props.deleteFriend}
                                    submit=   {this.props.putFriend}
                                />
                    })}
                </div> {/* friend-container */}

            </div>  /* main-container */
        );
    }
}

const mstp = state => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends,
    }
}

export default connect(mstp, { fetchData, putFriend, deleteFriend })(FriendList);