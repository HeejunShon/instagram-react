import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo_text.png";

import "./Login.css";

class Login extends Component {
    state = {
        id: "",
        password: "",
        disabled: true
    }

    handleChange = (e) => {
        const {className, value} = e.target;

        this.setState({ // setState() == 비동기
            [className]: value
        }, () => { // setState() 실행 후 콜백함수 실행 
            this.checkInput();
        });
    }

    checkInput = () => {
        console.log("id " + this.state.id + ".");
        console.log("pw " + this.state.password + ".");

        if (this.state.id && this.state.password) 
            this.buttonOn();
        else
            this.buttonOff();
    }
  
    
    buttonOn = () => {
        this.setState({
            disabled: false
        });
    }

    buttonOff = () => {
        this.setState({
           disabled: true
        });
    }

    render() {
        return (
            <div className="Login">
                <img src={logo} alt="logo"/>
                <div className="inputPanel">
                    <input className="id" onChange={this.handleChange}  type="text" placeholder="전화번호, 사용자 이름 또는 이메일"></input>
                    <input className="password"  onChange={this.handleChange} type="password" placeholder="비밀번호"></input>
                    <Link to="/main">
                        <button className="button-login" type="button" disabled={this.state.disabled}>로그인</button>
                    </Link>
                </div>
                <a href="" className="forget">비밀번호를 잊으셨나요?</a>
            </div> 
        );
    }
}

export default Login;
