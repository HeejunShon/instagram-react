import React, { Component } from 'react'
import logo from "../logo_text.png";

import "./Header.css"

export class Header extends Component {
    render() {
        return (
            <nav className="Header">
                <div className="wrapper">
                    <div className="logo">
                        <img className="logo-img" alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"/>
                        <div className="line"></div>
                        <img className="logo-typo" alt="logo" src={logo}/>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="검색"/>
                    </div>
                    <div className="menu">
                        <img className="icon" alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                        <img className="icon" alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        <img className="icon" alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
