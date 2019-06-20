import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

import { FriendList, NavBar, Login, NewFriendForm } from "./components";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/friends" component={FriendList} />
                <PrivateRoute path="/friends/new" component={NewFriendForm} />
            </div>
        </Router>
    );
}

export default App;
