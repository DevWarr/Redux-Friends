import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

import FriendList from "./components/FriendList/FriendList";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/friends" component={FriendList} />
            </div>
        </Router>
    );
}

export default App;
