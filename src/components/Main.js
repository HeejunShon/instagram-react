import React, { Component } from "react";

import Header from "./Header";
import Feeds from "./Feeds";
import Side from "./Side";

import "./Main.css";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Header />
                <main>
                    <Feeds />
                    <Side />
                </main>
            </div>
        );
    }
}

export default Main;