import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FriendList from "./components/FriendList";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Route path="/login" component={Login} />
                <Route exact path="/friends" component={FriendList} />
            </div>
        </Router>
    );
}

export default App;
