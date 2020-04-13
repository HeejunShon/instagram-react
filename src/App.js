import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"

import Login from "./components/Login"
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/main" component={Main} />
            </Router>
        );
    }
}


export default App;
